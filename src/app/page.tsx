import Head from "next/head";
import Header from "@/components/index_page/Header";
import Footer from "@/components/index_page/Footer";
import Main from "@/components/index_page/Main";


export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" type="image/x-icon" href="./images/icons/favicon.ico"></link>
        <title>Portfolio</title>
      </Head>
      <main>
        <Header />
        <Main />
        <Footer />
      </main>
    </>
  );
}
