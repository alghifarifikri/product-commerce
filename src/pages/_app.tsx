import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { lazy, Suspense } from "react";

const NavBar = lazy(() => import("@/components/NavBar"));

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Suspense fallback={<div>Loading Navigation...</div>}>
        <NavBar />
      </Suspense>
      <Component {...pageProps} />;
    </>
  );
}
