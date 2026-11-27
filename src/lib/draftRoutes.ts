/** Drafts must not become public merely because unrelated changes are deployed. */
export function isDraftPreview(isDevelopment: boolean, hostname: string): boolean {
  return isDevelopment || hostname === "id-preview--633f6989-8325-4a39-b1db-9033d10321cf.lovable.app";
}

export const showArticleDrafts = isDraftPreview(import.meta.env.DEV, window.location.hostname);

export function previewOnlyRoutes<T>(isPreview: boolean, routes: T[]): T[] {
  return isPreview ? routes : [];
}