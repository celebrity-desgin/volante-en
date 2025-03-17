import Head from 'next/head';
import Header from '@/src/components/Header';
import ScrollBar from '@/src/components/ScrollBar';
import About from '@/src/components/sections/About';
import Blog from '@/src/components/sections/Blog';
import Clients from '@/src/components/sections/Clients';
import Contact from '@/src/components/sections/Contact';
import Copyright from '@/src/components/sections/Copyright';
import Facts from '@/src/components/sections/Facts';
import Home from '@/src/components/sections/Home';
import Portfolio from '@/src/components/sections/Portfolio';
import Testimonials from '@/src/components/sections/Testimonials';
import Separator from '@/src/components/Separator';
import { jqueryFuntion } from '@/src/utilits';
import { Fragment, useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    jqueryFuntion();
  });

  return (
    <Fragment>
      <Head>
        {/* 🔹 ページタイトル */}
        <title>Volante Token Sale!</title>
        <meta
          name="description"
          content="Get VOL Tokens at a Special Launch Price!"
        />

        {/* 🔹 OGP設定 */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Volante Token Sale!" />
        <meta
          property="og:description"
          content="Get VOL Tokens at a Special Launch Price!"
        />
        <meta property="og:url" content="https://volante-ten.vercel.app/" />
        <meta
          property="og:image"
          content="https://volante-ten.vercel.app/assets/images/logo.png"
        />

        {/* 🔹 Twitterカード（X用） */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Volante Token Sale!" />
        <meta
          name="twitter:description"
          content="Get VOL Tokens at a Special Launch Price!"
        />
        <meta
          name="twitter:image"
          content="https://volante-ten.vercel.app/assets/images/logo.png"
        />

        {/* 🔹 サイトのファビコン */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="page-content">
        <Header />
        <div id="wrapper">
          <main className="flex-column-mobile">
            <Home />
            <About />
            <Separator type={'down'} />
            <Facts />
            <Separator type={'up'} />
            <Portfolio />
            <Separator type={'down'} />
            <Testimonials />
            <Separator type={'up'} />
            <Contact />
            <Separator type={'down'} />
            <Clients />
            <Separator type={'up'} />
            <Blog />
            <Separator type={'down'} />
            <Copyright />
          </main>
        </div>
        <ScrollBar />
      </div>
    </Fragment>
  );
};
export default Index;
