import "@/styles/globals.css";
import "@team.poi/ui/src/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import { ModalProvider } from "@team.poi/ui/dist/cjs/hooks/Modal";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Analytics />
      <ToastContainer autoClose={3000} position="bottom-right" />
      <Component {...pageProps} />
    </ModalProvider>
  );
}
