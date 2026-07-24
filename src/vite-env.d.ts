/// <reference types="vite/client" />

declare global {
  interface Window {
    gtag?: (
      command: string,
      ...args: (string | Date | Record<string, unknown>)[]
    ) => void;
  }
}

export {};
