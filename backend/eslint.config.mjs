export default [
  {
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    rules: {
      "semi": ["error", "always"],        // Exigir ponto e vírgula
      "quotes": ["error", "single"],      // Exigir aspas simples
      "no-unused-vars": "warn",           // Avisar sobre variáveis não usadas
      "indent": ["error", 2],             // Indentar com 2 espaços
      "no-console": "warn",               // Avisar sobre o uso de console.log
    },
  },
];
