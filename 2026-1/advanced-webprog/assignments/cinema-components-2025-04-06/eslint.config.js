import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-plugin-prettier'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

// This is needed to use plugins configured in a flat config
const __dirname = dirname(fileURLToPath(import.meta.url))
const compat = new FlatCompat({
  baseDirectory: __dirname
})

// Import the prettier configuration
import prettierConfig from './.prettierrc.js'

export default [
  // Use ESLint's recommended rules as a baseline
  js.configs.recommended,
  
  // Add support for TypeScript linting
  ...tseslint.configs.recommended,
  
  // Configure React Hooks rules
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
    },
    rules: {
      // Verify the list of dependencies for Hooks like useEffect and useCallback
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  
  // Configure React Refresh plugin (prevents full reloads when using React Fast Refresh)
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
    },
  },
  
  // Prettier integration
  {
    files: ['**/*.{js,jsx,ts,tsx,json,css,scss,md}'],
    plugins: {
      prettier: prettier,
    },
    rules: {
      // Run Prettier as an ESLint rule and report differences as individual ESLint issues
      'prettier/prettier': ['error', prettierConfig],
      
      // Turn off rules that conflict with Prettier or are handled by Prettier
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off',
    },
  },
  
  // Project-specific configurations
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    
    // These rules apply to all files
    rules: {
      // Possible errors
      'no-console': ['warn', { allow: ['warn', 'error'] }], // Warn about console.log but allow console.warn and console.error
      'no-debugger': 'warn', // Warn about debugger statements
      
      // Best practices
      'eqeqeq': ['error', 'always'], // Require === and !== instead of == and !=
      'no-var': 'error', // Disallow var, use let/const instead
      'prefer-const': 'error', // Prefer const over let when variable is not reassigned
      'no-param-reassign': 'error', // Prevent reassigning function parameters
      
      // Style - some style rules disabled since Prettier handles them
      'indent': 'off', // Handled by Prettier
      'quotes': 'off', // Handled by Prettier
      'semi': 'off', // Handled by Prettier
      'comma-dangle': 'off', // Handled by Prettier
      'max-len': 'off', // Handled by Prettier
      
      // TypeScript specific
      '@typescript-eslint/no-explicit-any': 'warn', // Warn about using any type
      '@typescript-eslint/explicit-function-return-type': 'off', // Don't require explicit return types
      '@typescript-eslint/no-unused-vars': ['error', { 
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_'
      }], // Error on unused vars except those prefixed with _
    },
  },
  
  // Specific rules for test files
  {
    files: ['**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}', '**/tests/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-console': 'off', // Allow console in test files
      '@typescript-eslint/no-explicit-any': 'off', // Allow any in test files
    },
  },
  
  // Specific rules for configuration files
  {
    files: ['vite.config.ts', 'tailwind.config.js', 'postcss.config.js'],
    rules: {
      'no-console': 'off', // Allow console in config files
    },
  },
]
