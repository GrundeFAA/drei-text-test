import type { AppType } from "next/dist/shared/lib/utils";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <body style={{ height: "600px" }}>
      <Component {...pageProps} />
    </body>
  );
};

export default MyApp;
