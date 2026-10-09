// Usage: node scripts/screenshots.mjs <outDir> <path> [<path> ...]
// Needs the site running on http://localhost:4321 (npm run preview) and Google Chrome installed.
import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';

const [outDir = 'screenshots', ...paths] = process.argv.slice(2);
const base = process.env.BASE_URL ?? 'http://localhost:4321';
const viewports = { mobiel: { width: 375, height: 812 }, tablet: { width: 768, height: 1024 }, desktop: { width: 1440, height: 900 } };
const only = (process.env.VIEWPORTS ?? 'mobiel,desktop').split(',');
mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ channel: 'chrome' });
for (const [name, vp] of Object.entries(viewports).filter(([n]) => only.includes(n))) {
  const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: name === 'desktop' ? 1 : 2, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  for (const p of paths) {
    await page.goto(base + p, { waitUntil: 'networkidle' });
    // reveal everything that animates in on scroll
    await page.evaluate(() => document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in')));
    // scroll down so lazy images load, then back up
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
      window.scrollTo(0, 0);
    });
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(400);
    const slug = p === '/' ? 'home' : p.replace(/^\//, '').replace(/\//g, '-');
    await page.screenshot({ path: `${outDir}/${slug}-${name}.png`, fullPage: true });
    await page.screenshot({ path: `${outDir}/${slug}-${name}-boven.png` });
  }
  await ctx.close();
}
await browser.close();
