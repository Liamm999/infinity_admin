/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { defineConfig } from 'vite';
import path from 'path';
const postcssConfig = require('./postcss.config');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tsconfigPaths(), viteCommonjs()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  server: {
    host: true,
    port: 9006,
  },
  css: {
    devSourcemap: true,
    postcss: postcssConfig,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
});
