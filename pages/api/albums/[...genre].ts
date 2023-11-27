import type { NextApiRequest, NextApiResponse } from 'next';
import { shuffleArray } from '../../../utils/array';
import { getSpotifyAccessToken } from '../../../utils/token';
import getIdsByGenre from '../../../utils/get-ids-by-genre';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let { genre } = req.query;
    if (typeof genre === 'undefined') {
      throw new TypeError();
    }
    genre = Array.isArray(genre) ? genre[0] : genre;
    const ids = getIdsByGenre(genre);
    let token = req.cookies.access_token;

    if (!token) {
      token = await getSpotifyAccessToken();
      res.setHeader('Set-Cookie', `access_token=${token}`);
    }
    const response = await fetch(
      `https://api.spotify.com/v1/albums/?ids=${ids}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    if (response.ok) {
      const json = await response.json();
      res.json(shuffleArray(formatAlbumData(json)));
    } else if (response.status === 401) {
      // If the cause of the error is expired access token, request a new one and try again
      token = await getSpotifyAccessToken();
      res.setHeader('Set-Cookie', `access_token=${token}`);
    }
  } catch (error) {
    res.status(500);
  }
}

const formatAlbumData = (data: { albums: Array<Record<string, any>> }) => {
  return data.albums.map((album: Record<string, any>) => ({
    albumName: album.name,
    artistName: album.artists[0].name,
    coverImg: album.images[0].url
  }));
};
