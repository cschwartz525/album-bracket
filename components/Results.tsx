import Image from 'next/image';
import type { Album } from '../types/Album';

export type ResultsComponentProps = {
  albums: Album[];
};

const ResultsComponent = ({ albums }: ResultsComponentProps) => {
  return (
    <>
      <h3 className="text-center font-bold text-xl mb-4">Final Rankings</h3>
      <ul className="text-center">
        {albums.map((album, index) => (
          <li
            className="flex items-center justify-between w-[400px] mb-2"
            key={`album_${index}`}
          >
            {index + 1}.{' '}
            <Image
              src={album.coverImg}
              alt={`${album.albumName} by ${album.artistName}`}
              height={100}
              width={100}
            />
            <div className="flex-col w-64">
              <p className="truncate">{album.albumName}</p>
              <p className="truncate">{album.artistName}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ResultsComponent;
