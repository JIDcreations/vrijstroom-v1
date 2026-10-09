import { defineConfig } from 'astro/config';
import site from './src/config/site.json' with { type: 'json' };

export default defineConfig({
  site: site.url,
  // 'class' lets a parent style a child component through the class prop (e.g. <Spark class="..." />)
  scopedStyleStrategy: 'class',
});
