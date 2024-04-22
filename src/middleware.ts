// Add optional Middleware to keep the session alive, this will update the session expiry every time its called.

export { auth as middleware } from '@/lib/auth'

// for the current new version it makes an error
// https://stackoverflow.com/questions/78265432/issue-with-session-breaking-after-switching-locales-in-next-js-v14-with-i18next

// export default auth((request) => {
//   return NextResponse.next()
// })

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
