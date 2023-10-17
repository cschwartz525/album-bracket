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
    <div className="text-center cursor-pointer transition ease-in-out hover:scale-110">
      <Image
        src={coverImg}
        alt={`${albumName} by ${artistName}`}
        height={200}
        width={200}
      />
      <p className="font-bold mt-2">{albumName}</p>
      <p>{artistName}</p>
    </div>
  );
};

export default Album;
