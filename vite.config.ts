// Vite config for TanStack Start. Additional plugins (TanStack Start, React,
// Tailwind, path aliases, Nitro) are provided by the shared config package.
// Do not re-add those plugins manually or the build will fail with duplicates.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (SSR error wrapper).
    server: { entry: "server" },
  },
});
