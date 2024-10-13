import Navbar from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlassPane from "@/components/GlassPane";
import EventButton from "@/components/Button";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "racheldev",
  description: "Created by Rachel Johnson",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MTZB4X7H" />
      <body
        className={`${inter.className} candy-mesh dark:bg-blue-950 min-h-screen antialiased max-w-2xl flex flex-col md:flex-row mx-4 lg:mx-auto`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MTZB4X7H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0">
          <Navbar />
          <GlassPane>{children}</GlassPane>
          <EventButton />
        </main>
      </body>
    </html>
  );
}
