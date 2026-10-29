import "./globals.css";
import "./dark-test.css"; // DARK-TEST: throwaway, remove with the script below
import { Outfit } from "next/font/google";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body className="font-outfit">
        {/* DARK-TEST: dark is the default, /?theme=light to preview light mode (/?theme=dark to switch back) */}
        <Script
          id="dark-test"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{var p=new URLSearchParams(location.search).get("theme");if(p==="dark"||p==="light")sessionStorage.setItem("theme",p);if(sessionStorage.getItem("theme")!=="light"){document.documentElement.dataset.theme="dark"}}catch(e){}`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
