// Quick interaction checks for the calculator and the contact form.
import { chromium } from 'playwright-core';
const base = process.env.BASE_URL ?? 'http://localhost:4321';
const b = await chromium.launch({ channel: 'chrome' });
const p = await (await b.newContext({ viewport: { width: 375, height: 812 } })).newPage();
const errors = [];
p.on('pageerror', (e) => errors.push(e.message));
p.on('console', (m) => m.type() === 'error' && errors.push(m.text()));

await p.goto(base + '/');
const ah = async () => { await p.waitForTimeout(600); return p.textContent('[data-out="ah"]'); };
console.log('rekentool start:', await ah());
await p.click('label.pill:has-text("Laptop")');
console.log('rekentool + laptop:', await ah());
await p.click('label.day:has-text("7")');
console.log('rekentool 7 dagen:', await ah(), '|', await p.textContent('[data-out="total"]'));
for (const el of await p.$$('input[name="device"]:checked')) await el.click({ force: true });
console.log('rekentool leeg:', await ah(), '| melding zichtbaar:', await p.isVisible('[data-out="empty"]'));

await p.goto(base + '/contact');
console.log('bedankt verborgen bij laden:', !(await p.isVisible('.cform__done')));
await p.click('.cform button[type="submit"]');
console.log('fout naam zichtbaar:', await p.isVisible('#cf-name-err'), '| fout contact zichtbaar:', await p.isVisible('#cf-contact-err'));
await p.fill('#cf-name', 'Test');
await p.fill('#cf-email', 'geen-mail');
await p.click('.cform button[type="submit"]');
console.log('fout e-mail zichtbaar:', await p.isVisible('#cf-email-err'));
await p.fill('#cf-email', 'test@example.com');
await p.click('.cform button[type="submit"]');
console.log('status zonder endpoint:', await p.textContent('.cform__status'));
console.log('JS-fouten:', errors.length ? errors : 'geen');
await b.close();
