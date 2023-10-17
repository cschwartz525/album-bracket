import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Album from '../components/Album';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Album Bracket</title>
        <meta
          name="description"
          content="Rank your favorite albums in this head-to-head game"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="text-3xl font-bold mb-6">Album Bracket</h1>

        <div className="flex gap-8 items-center">
          <Album
            albumName="The Blue Album"
            artistName="Weezer"
            coverImg="/weezer.jpeg"
          />
          <p>vs</p>
          <Album
            albumName="Dookie"
            artistName="Green Day"
            coverImg="/greenday.jpeg"
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
