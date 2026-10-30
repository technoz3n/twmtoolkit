js
const js = require('@eslint/js');

module.exports = [
	js.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 'latest',
		},
		rules: {
			// Errors
			'no-var': 'error',
			'prefer-const': 'error',
			'no-unused-vars': ['warn', {
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			}],
			'no-undef': 'error',
			'no-unreachable': 'error',
			'no-dupe-keys': 'error',
			'no-constant-condition': 'error',

			'indent': ['warn', 'tab'],
			'quotes': ['warn', 'single', {
				avoidEscape: true,
			}],
			'semi': ['warn', 'always'],
			'comma-spacing': 'warn',
			'keyword-spacing': 'warn',
			'space-infix-ops': 'warn',
			'object-curly-spacing': ['warn', 'always'],
			'arrow-spacing': 'warn',
			'no-trailing-spaces': 'warn',
			'no-multiple-empty-lines': ['warn', {
				max: 2,
			}],

			'no-console': 'off',
			'no-inline-comments': 'off',
			'max-nested-callbacks': 'off',
			'max-statements-per-line': 'off',
			'no-empty-function': 'off',
			'curly': 'off',
			'brace-style': 'off',
			'yoda': 'off',
		},
	},
];