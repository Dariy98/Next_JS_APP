import Head from 'next/head';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav/>
        <div className="container">

          <main>
            <h1 className="title">Hi! It's home page.</h1>
          </main>

        </div>
        
        <style jsx>{`
        .container {
          min-height: 100vh;
          max-width: 940px;
          margin: 0 auto;
          padding-top: 60px;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}
