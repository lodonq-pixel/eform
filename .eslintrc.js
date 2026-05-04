module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'prettier'
  ],
  rules: {
    // React specific rules
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    
    // General JavaScript rules
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-console': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
    
    // Import rules
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    
    // Code style
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never']
  },
  env: {
    browser: true,
    es6: true,
    node: true
  }
};
