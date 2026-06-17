import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SmoothScroll from "@/components/common/SmoothScroll";

export const metadata: Metadata = {
  title: "Reddy Book — Premium Sports Betting & Casino Exchange",
  description: "Reddy Book — The ultimate Sports Betting & Casino Exchange. Get best live odds on Cricket, Soccer, and Tennis. Instant secure deposits and rapid withdrawals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-bg-dark text-white selection:bg-gold selection:text-bg-dark">
        <SmoothScroll>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
