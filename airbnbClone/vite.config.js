import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills(),
    react(),
  ],
})


// import vue from '@vitejs/plugin-vue'
// import reactRefresh from '@vitejs/plugin-react';
// import { nodePolyfills } from 'vite-plugin-node-polyfills';



// export default {
//   resolve: {
//     alias: {
//       process: "process/browser",
//       stream: "stream-browserify",
//       zlib: "browserify-zlib",
//       util: 'util'
//     }
//   },
//   plugins: [
//     vue(),
//     nodePolyfills(),
//     reactRefresh(),

//   ]
// }

// export default defineConfig({
//   build: {
//     // generate .vite/manifest.json in outDir
//     manifest: true,
//     rollupOptions: {
//       // overwrite default .html entry
//       input: '/path/to/main.js',
//     },
//   },
// })



