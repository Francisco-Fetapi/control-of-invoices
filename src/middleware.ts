import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

type MiddlewareReturn = Promise<Response | undefined> | Response | undefined;

const protectdRoutesForAuth = [
  "/adicionar-categoria",
  "/adicionar-empresas-parceiras",
  "/categoria-despesas",
  "/configuracoes",
  "/empresas-parceiras",
  "/historico",
  "/lancar-despesa",
  "/lancar-nota-fiscal",
];

function isProtected(str: string) {
  return (
    str === "/" ||
    protectdRoutesForAuth.some((routeProtected) =>
      str.startsWith(routeProtected)
    )
  );
}

export function middleware(request: NextRequest): MiddlewareReturn {
  const nextPathname = request.nextUrl.pathname;
  if (isProtected(nextPathname)) {
    return NextResponse.redirect(new URL("/iniciar-sessao", request.url));
  }

  return NextResponse.next();
}
