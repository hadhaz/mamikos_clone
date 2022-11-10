import Head from "next/head";
import Image from "next/image";
import Footers from "../components/footer/Footer";
import Headers from "../components/headers/Headers";
import Main from "../components/main/Main";
import CustomProvider from "../store";

export default function Home() {
  return (
    <CustomProvider>
      <Head>
        <title>Mamikos - Cari, Bayar, & Sewa Kos Impianmu Secara Online</title>
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='https://static-asset2.mamikos.com/general/img/manifest/favicon-16x16.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='https://static-asset2.mamikos.com/general/img/manifest/favicon-32x32.png'
        />
      </Head>
      <Headers />
      <Main />
      <Footers />
    </CustomProvider>
  );
}
