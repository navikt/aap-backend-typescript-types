import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./index.ts"],
  format: ["cjs", "esm"], // Build for commonJS and ESmodules
  dts: true, // Generate declaration file (.d.ts)
  sourcemap: true,
  fixedExtension: false,
  clean: true,
  target: false,
});
