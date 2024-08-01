import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.js'],
  format: ['cjs', 'esm'],
  dts: {
    entry: 'src/index.d.ts', 
  },
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', 'react-query', 'rxjs', 'events'],
  outDir: 'dist',
});
