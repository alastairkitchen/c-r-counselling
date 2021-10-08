import Head from 'next/head'
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
        <h1>
          Catherine Robertson <span>Counselling</span>
        </h1>
        <p>Sandyford Place, Glasgow</p>
        <p>Website coming soon...</p>
        <p>
          <a
            href="https://www.bacp.co.uk/profile/219ed7ea-4f90-e711-80e8-3863bb349ac0/therapist?location=Glasgow"
            title="catherine"
          >
            More info
          </a>{" "}
        </p>
        <p style={{ marginBottom: '15px' }}>Play and creative arts counsellor for children 4-13 years.</p>
        <p style={{ marginBottom: '15px' }}>Person-centred, integrative counsellor for adults 18+</p>
        <p style={{ marginBottom: '15px' }}>Private counselling near Glasgow City Centre</p>
      </main>
    </Layout>

  )
}
