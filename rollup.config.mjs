import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import styles from "rollup-plugin-styles";

export default {
	input: 'src/main.js',
	watch: true,
	output: {
		file: 'build/bundle.js',
		format: 'iife'
	},
	plugins: [
		styles({
			config: {
				path: './postcss.config.js'
			}
		}),
		serve('build'),
		livereload({ watch: 'build'}),
  ]
};