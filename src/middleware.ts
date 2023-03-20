import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nookies from "nookies";
import { loginUserWithEmailPassword } from "services/loginUserWithEmailAndPassword";

type MiddlewareReturn = Promise<Response | undefined> | Response | undefined;

const protectdRoutesForAuth = [
  "/despesas",
  "/empresas-parceiras",
  "/configuracoes",
  "/historico",
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

export function isLoggedIn(req: NextRequest) {
  const cookies = nookies.get({ req });
  const userId = cookies.uid;

  return userId != null;
}

export function middleware(request: NextRequest): MiddlewareReturn {
  const nextPathname = request.nextUrl.pathname;
  if (!isLoggedIn(request) && isProtected(nextPathname)) {
    return NextResponse.redirect(new URL("/iniciar-sessao", request.url));
  }

  return NextResponse.next();
}
