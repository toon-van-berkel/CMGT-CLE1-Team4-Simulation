import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');
const repo = 'CMGT-CLE1-Team4-Simulation';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: '200.html'
    }),
    paths: {
      base: dev ? '' : `/${repo}`
    }
  }
};
