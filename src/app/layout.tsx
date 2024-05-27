import "./globals.css";
import { Providers } from "./providers";
import Footer from "@/app/_component/layouts/footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            {children}
            {/* <Footer /> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
