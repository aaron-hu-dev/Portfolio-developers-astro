// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        lucide: [
          "rocket",
          "atom",
          "wind",
          "server",
          "earth",
          "file-code",
          "eclipse",
          "philippine-peso",
          "trending-up",
          "camera",
          "smartphone",
          "cpu",
          "code",
          "video",
          "cloud",
          "flame",
          "linkedin",
          "github",
          "mail",
          "briefcase",
          "folder-code",
          "external-link",
          "star",
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@astrojs/node']
    },
    ssr: {
      external: ['astro-icon'],
      noExternal: []
    }
  },
	server: {
		allowedHosts:[
			'aaronhu.dev'
		],
		middlewareMode: true,
		hmr: {
			timeout: 120000
		}
	},

});
