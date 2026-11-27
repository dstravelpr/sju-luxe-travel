/** Drafts must not become public merely because unrelated changes are deployed. */
export function previewOnlyRoutes<T>(isDevelopment: boolean, routes: T[]): T[] {
  return isDevelopment ? routes : [];
}