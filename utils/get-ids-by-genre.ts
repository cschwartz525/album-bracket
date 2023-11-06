const data: Record<string, string[]> = {
  alternative: ['1xpGyKyV26uPstk1Elgp9Q', '4uG8q3GPuWHQlRbswMIRS6']
};

const getIdsByGenre = (genre: string) => {
  const arr = data[genre] || [];
  return arr.join(',');
};

export default getIdsByGenre;
