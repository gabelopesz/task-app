import { defineConfig } from 'eslint-define-config';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';

export default defineConfig({
  languageOptions: {
    globals: {
      process: 'readonly',
      __dirname: 'readonly',
    },
  },
  files: ['**/*.js', '**/*.ts', '**/*.tsx'],
  plugins: {
    '@typescript-eslint': typescriptEslintPlugin, // Aqui você importa e define o plugin
  },
  rules: {
    'no-console': 'warn',
    'semi': ['error', 'always'],
    // outras regras conforme necessário
  },
});
