import { Component } from 'react';
import type { AppProps } from 'next/app';
import Image from 'next/image';

interface AlbumProps {
  albumName: string;
  artistName: string;
  coverImg: string;
}

const Album = ({ albumName, artistName, coverImg }: AlbumProps) => {
  return (
    <div>
      <Image
        src={coverImg}
        alt={`${albumName} by ${artistName}`}
        height={200}
        width={200}
      />
      <p>{albumName}</p>
      <p>{artistName}</p>
    </div>
  );
};

export default Album;
