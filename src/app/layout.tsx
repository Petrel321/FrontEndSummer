import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";


export interface PageMetadata {
  title: string;
}

export const metadata: Record<string, PageMetadata> = {
  home: {
    title: "Portfolio"
  },
  joke: {
    title: "Portfolio"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <body>
        <header>
          <Link href={"/"}>
            <div>
              Portfolio
            </div>
          </Link>
          <Link href={"/hw2"}>
            <div>
              Joke
            </div>
          </Link>
        </header>
        {children}
        <footer>
          Custom footer
        </footer>
      </body>
    </html>
  );
}