import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Image from 'next/image'
import Layout from '../components/layout'

export default function Home() {
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
          <Image
            src="/images/desktop-hero.png"
            alt="Catherine sat in her counselling room smiling"
            width={1440}
            height={700}
          />

          <div className="placeholder-about-me">[ABOUT ME]</div>
          <div className="placeholder-counselling">[COUNSELLING]</div>
          <div className="placeholder-appointments"></div>

          <Footer></Footer>


        </div>
      </main>
    </Layout>

  )
}
