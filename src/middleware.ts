import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

type MiddlewareReturn = Promise<Response | undefined> | Response | undefined;

const protectdRoutesForAuth = [
  "/despesas",
  "/empresas-parceiras",
  "/configuracoes",
  "/historico",
  "/lancar-nota-fiscal",
];

export function isProtected(str: string) {
  return (
    str === "/" ||
    protectdRoutesForAuth.some((routeProtected) =>
      str.startsWith(routeProtected)
    )
  );
}

export function isLoggedIn(req: NextRequest) {
  const uid = req.cookies.get("uid");

  return uid != null;
}

export function middleware(request: NextRequest): MiddlewareReturn {
  const nextPathname = request.nextUrl.pathname;

  if (!isLoggedIn(request) && isProtected(nextPathname)) {
    return NextResponse.redirect(new URL("/iniciar-sessao", request.url));
  }

  return NextResponse.next();
}
