import pluginJs from '@eslint/js';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import pluginImportHelpers from 'eslint-plugin-import-helpers'; // Importando o plugin import-helpers
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactNative from 'eslint-plugin-react-native';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: globals.node } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		plugins: {
			'@typescript-eslint': typescriptEslintPlugin,
			'react-native': pluginReactNative, // Definindo o plugin react-native
			'react-hooks': pluginReactHooks, // Definindo o plugin react-hooks
			'import-helpers': pluginImportHelpers, // Definindo o plugin import-helpers
			prettier,
		},
		rules: {
			'prettier/prettier': [
				'error',
				{
					endOfLine: 'auto',
				},
			],
			'@typescript-eslint/no-unused-vars': 'off',
			'@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-unsafe-function-type': 'error',
			'@typescript-eslint/no-wrapper-object-types': 'error',
			'@typescript-eslint/consistent-type-definitions': 'off',
			'@typescript-eslint/explicit-member-accessibility': [
				'error',
				{
					accessibility: 'no-public',
				},
			],
			'@typescript-eslint/indent': 'off',
			'no-underscore-dangle': 'off',
			'@typescript-eslint/no-floating-promises': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-return': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/restrict-template-expressions': 'off',
			'@typescript-eslint/member-delimiter-style': 'off',
			'@typescript-eslint/member-ordering': 'error',
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'enumMember',
					format: ['UPPER_CASE', 'camelCase'],
				},
				{
					selector: 'variableLike',
					format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
					leadingUnderscore: 'allow',
				},
			],
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-parameter-properties': 'off',
			'@typescript-eslint/no-shadow': [
				'off',
				{
					hoist: 'all',
				},
			],
			'@typescript-eslint/no-unused-expressions': 'error',
			'@typescript-eslint/no-use-before-define': 'off',
			'@typescript-eslint/prefer-for-of': 'error',
			'@typescript-eslint/prefer-function-type': 'error',
			'@typescript-eslint/triple-slash-reference': [
				'error',
				{
					path: 'always',
					types: 'prefer-import',
					lib: 'always',
				},
			],
			'@typescript-eslint/type-annotation-spacing': 'off',
			'@typescript-eslint/unified-signatures': 'error',
			'arrow-body-style': 'error',
			'arrow-parens': ['off', 'always'],
			'brace-style': ['off', 'off'],
			'comma-dangle': 'off',
			complexity: 'off',
			'constructor-super': 'error',
			curly: 'error',
			'eol-last': 'off',
			eqeqeq: ['error', 'smart'],
			'guard-for-in': 'error',
			'id-blacklist': 'error',
			'id-match': 'error',
			'import/extensions': 'off',
			'linebreak-style': 'off',
			'max-classes-per-file': ['error', 1],
			'max-len': [
				'error',
				{
					code: 120,
				},
			],
			'new-parens': 'off',
			'newline-per-chained-call': 'off',
			'no-bitwise': 'error',
			'no-caller': 'error',
			'no-cond-assign': 'error',
			'no-console': 'error',
			'no-debugger': 'error',
			'no-empty': 'off',
			'no-eval': 'error',
			'no-extra-semi': 'off',
			'no-fallthrough': 'off',
			'no-invalid-this': 'off',
			'no-irregular-whitespace': 'error',
			'no-multiple-empty-lines': 'error',
			'no-new-wrappers': 'error',
			'no-redeclare': 'error',
			'no-throw-literal': 'error',
			'no-trailing-spaces': 'error',
			'no-undef-init': 'error',
			'no-unsafe-finally': 'error',
			'no-unused-labels': 'error',
			'object-shorthand': 'error',
			'one-var': ['error', 'never'],
			'padding-line-between-statements': [
				'error',
				{
					blankLine: 'always',
					prev: '*',
					next: 'return',
				},
			],
			'quote-props': 'off',
			radix: 'error',
			'react/prop-types': 'off',
			'react/jsx-curly-spacing': 'off',
			'react/jsx-equals-spacing': 'off',
			'react/jsx-props-no-spreading': 'off',
			'react/require-default-props': 'off',
			'react-hooks/rules-of-hooks': 'off',
			'react-hooks/exhaustive-deps': 'warn',
			'space-before-function-paren': 'off',
			'space-in-parens': ['off', 'never'],
			'spaced-comment': [
				'error',
				'always',
				{
					markers: ['/'],
				},
			],
			'use-isnan': 'error',
			'valid-typeof': 'off',
		},
	},
];