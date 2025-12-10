/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />

interface ImportMetaEnv {
  // Add other env vars here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
