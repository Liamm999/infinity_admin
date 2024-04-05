module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:react/recommended',
    // 'plugin:react-hooks/recommended',
    // 'plugin:jsx-a11y/recommended',
    // 'standard-with-typescript',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    semi: 0,
    'react/react-in-jsx-scope': 0,
    'no-console': 1,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/no-empty-function': 0,
    'no-await-in-loop': 2,
    'no-empty': [2, { allowEmptyCatch: true }],
    'prefer-const': 1,
    'import/no-anonymous-default-export': 0,
    eqeqeq: 2,
    'no-empty-function': 0,
    'no-self-compare': 2,
    'prettier/prettier': 0,
    'no-undef': 0,
    'react/display-name': 0,
    'react/jsx-key': 1,
    'no-unused-vars': 0,
    'require-await': 0,
    'react-hooks/rules-of-hooks': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-unreachable': 1
  }
};
