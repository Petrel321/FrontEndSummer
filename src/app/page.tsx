import Head from "next/head";
import Header from "@/components/index_page/Header";
import Footer from "@/components/index_page/Footer";
import Main from "@/components/index_page/Main";
import { metadata } from "./layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.home.title}</title>
      </Head>
      <main>
        <Header />
        <Main />
        <Footer />
      </main>
    </>
  );
}
