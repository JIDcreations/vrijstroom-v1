import faq from '../content/faq.json';

export type FaqItem = { id: string; q: string; a: string };

export const allFaq: FaqItem[] = faq.items;

export function faqByIds(ids: string[]): FaqItem[] {
  return ids.map((id) => {
    const item = allFaq.find((f) => f.id === id);
    if (!item) throw new Error(`Vraag "${id}" niet gevonden in src/content/faq.json`);
    return item;
  });
}
