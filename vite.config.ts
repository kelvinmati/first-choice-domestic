// import { reactRouter } from "@react-router/dev/vite";
// import tailwindcss from "@tailwindcss/vite";
// import { defineConfig } from "vite";
// import { fileURLToPath, URL } from "node:url";

// export default defineConfig({
//   base: "/",
//   plugins: [tailwindcss(), reactRouter()],
//   resolve: {
//     alias: {
//       "~": fileURLToPath(new URL("./app", import.meta.url)),
//     },
//   },
// });


import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// ↓ add this
import netlifyReactRouter from "@netlify/vite-plugin-react-router";

export default defineConfig({
  plugins: [
    reactRouter(),
    tsconfigPaths(),
    netlifyReactRouter({ edge: true }) // ← add this
  ]
});