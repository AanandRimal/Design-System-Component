module.exports = {
    root: true,
    extends: [
    'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'prettier',
      'prettier/react',
      'prettier/@typescript-eslint',
      'plugin:prettier/recommended'
    ],
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    parserOptions: {
      ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
      sourceType: 'module', // Allows for the use of imports
      ecmaFeatures: {
        jsx: true, // Allows for the parsing of JSX
        arrowFunctions: true,
      },
      project: './tsconfig.json',
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    settings: {
      react: {
        version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          paths: ['./src'],
        },
      },
    },
    rules: {
      "react/jsx-props-no-spreading": "off",
      "import/prefer-default-export": "off",
      "react/jsx-boolean-value": "off",
      "react/no-unescaped-entities": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-wrap-multilines": "off",
      "react/destructuring-assignment": "off",
      "react/require-default-props":"off",
      'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft'] }],
      "@typescript-eslint/explicit-module-boundary-types": "off",
      // Existing rules
      'comma-dangle': 'off', // https://eslint.org/docs/rules/comma-dangle
      'function-paren-newline': 'off', // https://eslint.org/docs/rules/function-paren-newline
      'global-require': 'off', // https://eslint.org/docs/rules/global-require
      'import/no-dynamic-require': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
      'no-inner-declarations': 'off', // https://eslint.org/docs/rules/no-inner-declarations// New rules
     // New rules
      'class-methods-use-this': 'off',
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-var-requires': 'off',
       'jsx-a11y/control-has-associated-label': 'off',
  
    "react/react-in-jsx-scope": "off",
    'react/prop-types': 'off',
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
    },
  };