import { NextRequest, NextResponse } from 'next/server';

const LOCALES = ['en', 'es'] as const;
const COOKIE_NAME = 'NEXT_LOCALE';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export function GET(request: NextRequest) {
  const locale = request.nextUrl.searchParams.get('locale');
  if (!locale || !LOCALES.includes(locale as (typeof LOCALES)[number])) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const res = NextResponse.redirect(new URL('/', request.url));
  res.cookies.set(COOKIE_NAME, locale, {
    path: '/',
    maxAge: COOKIE_MAX_AGE,
    sameSite: 'lax',
  });
  return res;
}
