import React, { useEffect } from 'react'
import Head from 'next/head'
import { Header } from '../components/header'
import Footer from '../components/footer'
import { BackgroundBlock } from '../components/backgroundBlock';
import Layout from '../components/layout'
import HeroBanner from "../components/heroBanner";
import ContentBanner from "../components/contentBanner";
import ImageArticle from "../components/imageArticle/imageArticle";
import ContentBoxBanner from "../components/contentBoxBanner/contentBoxBanner";
import SlideshowBanner from "../components/slideshowBanner";
import FormBlock from "../components/formBlock";

import CathyHeadShot from '../public/images/cathy-headshot-desktop.png';
import RoomImage from '../public/images/counselling-room-setup.png';
import PlayTherepyImage from '../public/images/play-therapy.png';
import WorkingLaptopImage from '../public/images/working-on-laptop.png';
import AimForTheBushesImage from '../public/images/bushes.png';
import { backgroundColours } from '../constants/constants';


export default function Home() {

  const aboutMeRef = React.createRef();
  const counsellingRef = React.createRef();
  const appointmentsRef = React.createRef();
  const contactRef = React.createRef();
  const headerRef = React.createRef();

  const containerContent = `Private one-to-one counselling for adults, children and young people. Glasgow-based counsellor experienced in providing brief and long-term therapy. Qualified in talking therapy, online therapy, creative arts and play-based approaches.`
  const testimonails = [
    'Catherine is very easy to talk to and because of this her office became a safe space for me',
    'I learnt a lot about how to deal with feelings and emotions',
    'Catherine helped me build up my confidence to be more open and communicate with others',
    'Slide 4 lorem ipsum',
    'Slide 5 lorem ipsum'
  ]

  const contactContent = ` <p><span className="bold">NHS 24</span> - 111</p>
                          <p><span className="bold">Samaritans</span> - 116 123</p>
                          <p><span className="bold">Shout</span> - text “Shout” to 85258</p>
                          <p><span className="bold">Befrienders International</span> - www.befrienders.org</p>`;

  useEffect(() => {
    const spy = new Gumshoe('#site-header-navigation a', {
      navClass: 'site-header__nav-list--active',
      offset: headerRef.current.clientHeight
    });
  }, []);

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

        <Header
          aboutMeRef={aboutMeRef}
          counsellingRef={counsellingRef}
          appointmentsRef={appointmentsRef}
          contactRef={contactRef}
          ref={headerRef}
        ></Header>
        <div className="container">

          <HeroBanner />

          <ContentBanner content={containerContent} />

          <section
            id="about-me-section"
            ref={aboutMeRef}
          >
            <BackgroundBlock>
              <ImageArticle
                title='About Me'
                subHeader='My Approach'
                content='<p>I know that being genuinely listened to and supported to see that your thoughts and feelings are valid can help you to make changes both within yourself and in your life. I won’t tell you how you should feel or what you should do. But I may offer resources that can help you deepen your understanding of yourself, your situation or the choices you can make.</p><p>Because I have completed training in more than one type of therapy, I can adapt my way of working to help clients express their feelings in a way that feels comfortable and constructive for them. My primary training is in person-centred therapy and is at the heart of whatever approach I use. Many studies show that offering this type of authentic, collaborative counselling relationship best supports people to grow, heal and discover new perspectives.</p>'
                image={CathyHeadShot}
              />
            </BackgroundBlock>

            <BackgroundBlock>
              <ContentBoxBanner
                title='Professional experience'
                columns='2'
                column1Content='<p>I am a BACP Accredited counsellor which means I have significant skills and experience beyond my original qualification and I receive a high standard of training and supervision.</p><p>I have provided counselling since 2010 within schools, universities, a GP practice and a youth project. I use emerging evidence from the sciences to inform my work. My approach is based on understanding how the brain responds to stressful situations as well as how our relationships can mediate adverse experiences that cause poor mental and physical health.</p>'
                column2Content='<ul>
                  <li>MA (Honours) Psychology</li>
                  <li>Postgraduate Diploma in Counselling</li>
                  <li>Advanced Diploma in Counselling Children and Young People Using Creative Arts</li>
                  <li>Certified Cyber-therapist - Adults and Young People</li>
                </ul>'
              />
            </BackgroundBlock>
          </section>

          <section
            id="counselling-section"
            ref={counsellingRef}
          >
            <BackgroundBlock
              background={backgroundColours.grey}
            >
              <ImageArticle
                flip
                title='Counselling for adults'
                content='<p>Are you struggling with something that feels outside of your control?</p><p>You might be feeling overwhelmed, upset or stuck with your problems. I know asking for support with this might feel difficult. You may even feel unsure whether talking to someone will really help. It is normal to feel nervous and I will be sensitive to this when we first meet.</p><p>I will take time to create a space that feels safe for you to talk about difficult feelings or experiences you’ve had. Often people feel a great sense of relief once able to open up. Over time, you can also expect to feel more confident in yourself and in control of your life again.</p><p>The counselling I offer will focus on your needs, wants and goals. Where these may feel unclear, you will be supported to discover what these are. Whilst many people benefit from talking about their problems, we can explore if other ways of working could help you.</p><a class="anchor-link-alt" href="#add-pdf">Download Counselling for Adults FAQs PDF</a>'
                image={RoomImage}

              />
              <ContentBoxBanner
                background={backgroundColours.white}
                title='What I can help with:'
                columns='3'
                column1Content='<ul><li>Feelings of anxiety and depression</li><li>Family Issues</li><li>Relationship Issues</li><li>Work-related Stress or Bullying</li></ul>'
                column2Content='<ul><li>Low Confidence and Self-Esteem</li><li>Childhood Issues</li><li>Abuse and Trauma</li><li>Self-harm and Suicidal Thoughts</li></ul>'
                column3Content='<ul><li>Bereavement and Loss</li><li>LGBTQI+ Issues</li><li>Chronic Health Issues</li><li>Asperger’s Syndrome and ADHD</li></ul>'
              />
            </BackgroundBlock>

            <BackgroundBlock>
              <ImageArticle
                title='Counselling for children and young people'
                content='<p>Are you concerned about your child’s behaviour?</p><p>They may have become very nervous, withdrawn or difficult to manage. It might feel like nothing seems to help or you just can’t get them to open up.</p><p>Just like adults, children and young people benefit from having a private, confidential space to figure out their feelings. I am trained to use play, arts and talking therapy to support children to communicate difficulties in their lives in a way that works for them.</p><p>Being helped to understand confusing feelings can be a powerful experience for a child or young person. As they gain the tools to express themselves, they are likely to feel more confident about themselves and more able to manage challenging situations in the future.</p><p>As their parent, I will make sure you feel supported throughout their counselling too.</p><a class="anchor-link-alt" href="#add-pdf">Download Counselling for Children and Young People FAQs PDF</a>'
                image={PlayTherepyImage}

              />
              <ContentBoxBanner
                background={backgroundColours.grey}
                title='Issues in children I work with'
                columns='3'
                column1Content='<ul><li>Family Problems</li><li>Low Confidence and Self-Esteem</li><li>Bereavement and Loss</li><li>Low Mood and Anxiety</li></ul>'
                column2Content='<ul><li>Post-traumatic Stress and Trauma</li><li>Physical, Emotional or Sexual Abuse</li><li>Friendship and School Issues</li><li>Bullying-related Trauma</li></ul><ul>'
                column3Content='<ul><li>Separation Anxiety</li><li>LGBTQI+ Issues</li><li>Self-harm and Suicidal Thoughts</li><li>Asperger’s Syndrome and ADHD</li></ul>'
              />
            </BackgroundBlock>

            <BackgroundBlock background={backgroundColours.grey} >
              <ImageArticle
                flip
                title='Online counselling'
                content='<p>It’s not always easy to fit counselling into your life and make it work for you.</p><p>That’s why I offer the option of online counselling to both adults and young people.</p><p>Sessions can be held by <strong>video, voice over internet protocol, instant messenger or email.</strong> You get to choose how we meet. I know that for some clients they may find they can express or explore their thoughts and feelings better by word. And for some, it is easier to open up when you don’t have your counsellor right across from you in the same room.</p><p>Research shows that online counselling can be just as effective as meeting face-to-face. However, it is important your counsellor has the proper knowledge and skills to make sure your sessions are confidential and the therapeutic process is safe. As a Certified Cyber-therapist, you can be reassured that I am fully trained to offer this way of working.</p><a class="anchor-link-alt" href="#add-pdf">Download Online Counselling FAQs PDF</a>'
                image={WorkingLaptopImage}

              />
            </BackgroundBlock>
          </section>
          <section
            id="appointments-section"
            ref={appointmentsRef}
          >
            <BackgroundBlock>
              <ImageArticle
                title='Appointments and pricing'
                content='<p>Our first appointment together will be an initial consultation.</p><p>This is an opportunity for you to tell me about the problems you are facing. We will briefly discuss both past and present circumstances that may be affecting you or your child now.</p><p>This overview of your situation will help us best decide whether the counselling I offer is likely to be helpful.</p><p>It is important that you feel comfortable with me for counselling to work. Therefore this first meeting also lets you get to know me a little before deciding whether to commit to sessions.</p><p>If we agree to work together, I will let you know whether you or your child will benefit most from brief or long-term support. I usually suggest meeting weekly at the same day and time.</p><h3>Fees</h3><ul class="remove-default-list list-line-height"><li>Initial Consultation: £50</li><li>Adult Counselling Session: £50</li><li>CYP Counselling Session: £55-60</li></ul>'
                image={AimForTheBushesImage}

              />
            </BackgroundBlock>
          </section>
          <section
            id="contact-section"
            ref={contactRef}
          >
            <ContentBanner
              title='Contact'
              content={'Use the secure form below to book in for an initial consultation or to ask any questions you may have. I will respond to your message within 2 business days.'}
              size="small"
              containerSize='small'
            />

            <BackgroundBlock
              background={backgroundColours.grey}
            >
              <FormBlock background={backgroundColours.white} />
            </BackgroundBlock>

            <ContentBanner
              content={'If you are feeling overwhelmed and unable to cope, it is important you seek help now. If you are planning to immediately act upon suicidal thoughts, call 999. Otherwise, here are some more crisis options:'}
              htmlContent={contactContent}
              size="small"
              textAlign='left'
              containerSize='small'
            />
          </section>

          <SlideshowBanner title='Testimonials' slidesContent={testimonails} />

          <Footer></Footer>


        </div>
      </main>
    </Layout>

  )
}


