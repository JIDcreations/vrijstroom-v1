// Turns plain content strings into safe HTML and highlights every
// "[TE BEVESTIGEN: ...]" placeholder so missing facts stay visible.
const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function rich(text: string): string {
  return escape(text).replace(
    /\[TE BEVESTIGEN:([^\]]*)\]/g,
    (_m, inner) => `<mark class="tbc">[TE BEVESTIGEN:${inner}]</mark>`
  );
}

export const isPlaceholder = (text: string) => text.includes('[TE BEVESTIGEN');
