import React from 'react'

import Layout from '../components/layout'
import HeroBanner from "../components/heroBanner";
import ContentBanner from "../components/contentBanner";
import SlideshowBanner from "../components/slideshowBanner";
import AboutMe from "../components/sections/aboutMe";
import Counselling from "../components/sections/counselling";
import Emdr from "../components/sections/emdr";
import Appointments from "../components/sections/appointments";
import Contact from "../components/sections/contact";

import { backgroundColours } from '../constants/constants';


export default function Home() {

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

  const aboutMeRef = React.createRef();
  const counsellingRef = React.createRef();
  const appointmentsRef = React.createRef();
  const contactRef = React.createRef();
  const emdrRef = React.createRef();

  return (
    <Layout
      aboutMeRef={aboutMeRef}
      counsellingRef={counsellingRef}
      appointmentsRef={appointmentsRef}
      contactRef={contactRef}
      emdrRef={emdrRef}
      addScrollSpy
    >
      <HeroBanner />
      <ContentBanner content={containerContent} />
      <AboutMe aboutMeRef={aboutMeRef} />
      <Counselling counsellingRef={counsellingRef} backgroundColours={backgroundColours} />
      <Emdr emdrRef={emdrRef} backgroundColours={backgroundColours} />
      <Appointments appointmentsRef={appointmentsRef} contactContent={contactContent} backgroundColours={backgroundColours} />
      <Contact contactRef={contactRef} backgroundColours={backgroundColours} contactContent={contactContent} />
      <SlideshowBanner title='Testimonials' slidesContent={testimonails} />
    </Layout>

  )
}


