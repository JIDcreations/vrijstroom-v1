import type { ImageMetadata } from 'astro';

// Every photo in src/assets/photos is available by its file name (without extension).
// To swap a photo: replace the file, or point the content file at a new name.
const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp,avif}', { eager: true });

export const photos: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!.replace(/\.\w+$/, ''), mod.default])
);

export function photo(name: string): ImageMetadata {
  const img = photos[name];
  if (!img) throw new Error(`Foto "${name}" niet gevonden in src/assets/photos`);
  return img;
}
