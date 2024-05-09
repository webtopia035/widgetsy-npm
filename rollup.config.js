import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
    ],
    plugins: [
      commonjs({
        exclude: "src/**",
      }),
      postcss({
        plugins: [],
        minimize: true,
      }),
      resolve(),
      babel({
        babelHelpers: "runtime",
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      terser(),
    ],
  },
];
