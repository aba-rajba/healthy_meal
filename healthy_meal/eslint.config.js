import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  // Bazowe reguły dla wszystkich plików
  {
    ignores: [
      '/dist/**',
      '/coverage/**',
      '/node_modules/**',
      '/.angular/**',
      '**/*.html',  // Ignorujemy pliki HTML, ponieważ ESLint ma problemy z ich parsowaniem
      'package-lock.json'
    ]
  },
  
  // Konfiguracja dla TypeScript
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    plugins: {
      'prettier': eslintPluginPrettier
    },
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': [
        'warn',
        {
          'allowExpressions': true
        }
      ],
      '@typescript-eslint/member-ordering': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-unused-vars': 'error'
    }
  }
]; 