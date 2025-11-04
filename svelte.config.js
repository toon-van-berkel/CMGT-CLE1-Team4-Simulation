import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');
const repo = 'CMGT-CLE1-Team4-Simulation'; // <--- your repo name

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: '200.html' // if using SPA routing
    }),
    paths: {
      base: dev ? '' : `/${repo}`
    }
  }
};
