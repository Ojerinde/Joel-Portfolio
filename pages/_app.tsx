import type { AppProps } from "next/app";
import Layouts from "@/components/layouts";

import "@/StylesSheets/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
