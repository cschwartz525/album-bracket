import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import AlbumComponent from '../components/Album';
import styles from '../styles/Home.module.css';
import type { Album } from '../types/Album';

interface HomeProps {
  albums: Album[];
}

const Home: NextPage<HomeProps> = ({ albums }) => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(1);
  const [rankings, setRankings] = useState([albums[0]]);

  const leftAlbum = rankings[leftIndex];
  const rightAlbum = albums[rightIndex];

  const incrementRound = useCallback(() => {
    if (rightIndex >= albums.length - 1) {
      setIsGameOver(true);
    } else {
      setLeftIndex(0);
      setRightIndex(rightIndex + 1);
    }
  }, [albums, rightIndex, setIsGameOver, setLeftIndex, setRightIndex]);

  const onLeftClick = useCallback(() => {
    if (leftIndex < rankings.length - 1) {
      setLeftIndex(leftIndex + 1);
    } else {
      const newRankings = [...rankings];
      newRankings.push(rightAlbum);
      setRankings(newRankings);
      incrementRound();
    }
  }, [
    incrementRound,
    leftIndex,
    rankings,
    rightAlbum,
    setLeftIndex,
    setRankings
  ]);

  const onRightClick = useCallback(() => {
    const newRankings = [...rankings];
    newRankings.splice(leftIndex, 0, rightAlbum);
    setRankings(newRankings);
    incrementRound();
  }, [incrementRound, leftIndex, rankings, rightAlbum]);

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

        {isGameOver ? (
          <>
            <h3 className="text-center font-bold">Final Rankings</h3>
            <ul className="text-center">
              {rankings.map((album, index) => (
                <li key={`album_${index}`}>
                  {index + 1}. {album.artistName} - {album.albumName}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="flex gap-8 items-center">
            <AlbumComponent
              albumName={leftAlbum.albumName}
              artistName={leftAlbum.artistName}
              coverImg={leftAlbum.coverImg}
              onClick={onLeftClick}
            />
            <p>vs</p>
            <AlbumComponent
              albumName={rightAlbum.albumName}
              artistName={rightAlbum.artistName}
              coverImg={rightAlbum.coverImg}
              onClick={onRightClick}
            />
          </div>
        )}
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
