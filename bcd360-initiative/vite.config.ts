import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'copy-files',
          apply: 'build',
          generateBundle() {
            // Copy robots.txt and sitemap.xml to dist folder
            const robotsPath = path.resolve(__dirname, 'robots.txt');
            const sitemapPath = path.resolve(__dirname, 'sitemap.xml');
            
            if (fs.existsSync(robotsPath)) {
              const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
              this.emitFile({
                fileName: 'robots.txt',
                type: 'asset',
                source: robotsContent,
              });
            }
            
            if (fs.existsSync(sitemapPath)) {
              const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
              this.emitFile({
                fileName: 'sitemap.xml',
                type: 'asset',
                source: sitemapContent,
              });
            }
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
          output: {
            manualChunks: {
              firebase: ['firebase/app', 'firebase/auth'],
              recharts: ['recharts'],
            }
          }
        }
      }
    };
});
