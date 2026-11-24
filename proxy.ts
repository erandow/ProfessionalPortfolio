import { NextResponse, type NextRequest } from "next/server";
import { isLocale } from "@/lib/locales";

export function proxy(request: NextRequest) {
  const candidate = request.nextUrl.pathname.split("/")[1];
  if (!isLocale(candidate)) return NextResponse.next();

  // The global 404 renders outside the locale route and has no route params.
  const headers = new Headers(request.headers);
  headers.set("x-portfolio-locale", candidate);
  return NextResponse.next({ request: { headers } });
}

export const config = { matcher: "/:locale([a-z]{2})/:path*" };
