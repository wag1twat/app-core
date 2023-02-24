import esbuild from 'esbuild'

esbuild.build({
  entryPoints: ['./lib/index.ts'],
  outfile: './dist/index.js',
  bundle: true,
  minify: true,
  platform: 'browser',
  sourcemap: true,
  target: 'node18',
}).catch(() => process.exit(1))