import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Layout from '../components/layout'
import HeroBanner from "../components/heroBanner";
import ContentBanner from "../components/contentBanner";
import ImageArticle from "../components/imageArticle/imageArticle";
import ContentBoxBanner from "../components/contentBoxBanner/contentBoxBanner";
import CathyHeadShot from '../public/images/cathy-headshot-desktop.png';
import RoomImage from '../public/images/counselling-room-setup.png';

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
          <ImageArticle
            header='About Me'
            subHeader='My Approach'
            content='<p>I know that being genuinely listened to and supported to see that your thoughts and feelings are valid can help you to make changes both within yourself and in your life. I won’t tell you how you should feel or what you should do. But I may offer resources that can help you deepen your understanding of yourself, your situation or the choices you can make.</p><p>Because I have completed training in more than one type of therapy, I can adapt my way of working to help clients express their feelings in a way that feels comfortable and constructive for them. My primary training is in person-centred therapy and is at the heart of whatever approach I use. Many studies show that offering this type of authentic, collaborative counselling relationship best supports people to grow, heal and discover new perspectives.</p>'
            image={CathyHeadShot}
          />
          <ContentBoxBanner />
          <ImageArticle
            flip
            header='Counselling for adults'
            content='<p>Are you struggling with something that feels outside of your control?</p><p>You might be feeling overwhelmed, upset or stuck with your problems. I know asking for support with this might feel difficult. You may even feel unsure whether talking to someone will really help. It is normal to feel nervous and I will be sensitive to this when we first meet.</p><p>I will take time to create a space that feels safe for you to talk about difficult feelings or experiences you’ve had. Often people feel a great sense of relief once able to open up. Over time, you can also expect to feel more confident in yourself and in control of your life again.</p><p>The counselling I offer will focus on your needs, wants and goals. Where these may feel unclear, you will be supported to discover what these are. Whilst many people benefit from talking about their problems, we can explore if other ways of working could help you.</p><a href="#add-pdf">Download Counselling for Adults FAQs PDF</a>'
            image={RoomImage}

          />
          <div className="placeholder-counselling">[COUNSELLING]</div>
          <div className="placeholder-appointments"></div>

          <Footer></Footer>


        </div>
      </main>
    </Layout>

  )
}
