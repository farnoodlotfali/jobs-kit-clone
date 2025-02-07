import "./globals.css";

import type { Metadata } from "next";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";

import AppState from "@/context/AppState";
import QueryProvider from "@/providers/QueryProvider";
import Rtl from "@/theme/rtl-cache";

export const metadata: Metadata = {
  title: "جابزکیت - پلتفرم کاریابی بین المللی و دلاری برای ایرانیان",
  description:
    "با جابزکیت از داخل ایران شغل ریموت بین المللی پیدا کنید و درآمد دلاری را تجربه کنید.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />

        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Rtl>
            <CssBaseline />
            <QueryProvider>
              <AppState>
                <NuqsAdapter>{children}</NuqsAdapter>
              </AppState>
            </QueryProvider>
          </Rtl>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
