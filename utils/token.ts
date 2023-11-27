export const getSpotifyAccessToken = async (): Promise<string | undefined> => {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        client_id: process.env.SPOTIFY_CLIENT_ID || '',
        client_secret: process.env.SPOTIFY_CLIENT_SECRET || '',
        grant_type: 'client_credentials'
      })
    });
    const { access_token } = await response.json();
    return access_token;
  } catch (error) {
    return undefined;
  }
};
