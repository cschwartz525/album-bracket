import { Component } from 'react';
import type { AppProps } from 'next/app';
import Image from 'next/image';
import type { Album } from '../types/Album';

export type AlbumProps = Album & {
  onClick: () => void;
};

const AlbumComponent = ({
  albumName,
  artistName,
  coverImg,
  onClick
}: AlbumProps) => {
  return (
    <div
      className="flex flex-col max-w-[250px] items-center text-center cursor-pointer transition ease-in-out hover:scale-110"
      onClick={onClick}
      role="button"
    >
      <Image
        src={coverImg}
        alt={`${albumName} by ${artistName}`}
        height={250}
        width={250}
      />
      <p className="font-bold mt-2 max-w-[250px] truncate">{albumName}</p>
      <p className="max-w-[250px] truncate">{artistName}</p>
    </div>
  );
};

export default AlbumComponent;
