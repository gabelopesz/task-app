import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173", // Ajuste para a URL do seu aplicativo frontend
    supportFile: "cypress/support/e2e.ts", // Ajuste o caminho se necessário
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});