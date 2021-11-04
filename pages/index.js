import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Layout from '../components/layout'
import HeroBanner from "../components/heroBanner";
import ContentBanner from "../components/contentBanner";
import ImageArticle from "../components/imageArticle/imageArticle";
import ContentBoxBanner from "../components/contentBoxBanner/contentBoxBanner";


export default function Home() {

  const containerContent = `Private one-to-one counselling for adults, children and young people. Glasgow-based counsellor experienced in providing brief and long-term therapy. Qualified in talking therapy, online therapy, creative arts and play-based approaches.`

  return (
    <Layout>

      <Head>
        <title>Catherine Robertson Counselling</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="description" content="Catherine robertson counselling site coming soon"></meta>
      </Head>

      <main>

        <Header></Header>
        <div className="container">

          <HeroBanner />
          <ContentBanner content={containerContent} />
          <ImageArticle />
          <ContentBoxBanner />
          <div className="placeholder-counselling">[COUNSELLING]</div>
          <div className="placeholder-appointments"></div>

          <Footer></Footer>


        </div>
      </main>
    </Layout>

  )
}
