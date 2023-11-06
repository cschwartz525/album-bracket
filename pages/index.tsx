import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import Album, { AlbumProps } from '../components/Album';
import styles from '../styles/Home.module.css';

interface HomeProps {
  albums: AlbumProps[];
}

const Home: NextPage<HomeProps> = ({ albums }) => {
  const [round, setRound] = useState(0);

  const incrementRound = useCallback(() => {
    setRound(round + 1);
  }, [round, setRound]);

  const album1 = albums[round * 2];
  const album2 = albums[round * 2 + 1];

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
            albumName={album1.albumName}
            artistName={album1.artistName}
            coverImg={album1.coverImg}
            onClick={incrementRound}
          />
          <p>vs</p>
          <Album
            albumName={album2.albumName}
            artistName={album2.artistName}
            coverImg={album2.coverImg}
            onClick={incrementRound}
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

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/albums/alternative');
  const albums = await res.json();
  return { albums };
};

export default Home;
