declare namespace jest {
  interface Matchers<R> {
    toContainRole(role: string, quantity?: number): CustomMatcherResult
  }
}
