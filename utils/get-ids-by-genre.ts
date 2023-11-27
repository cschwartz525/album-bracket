const data: Record<string, string[]> = {
  alternative: [
    '1xpGyKyV26uPstk1Elgp9Q', // Weezer
    '4uG8q3GPuWHQlRbswMIRS6', // Green Day
    '5nkUSlIhtoJZMOUlB0sNCp', // Fall Out Boy
    '30ly6F6Xl0TKmyBCU50Khv', // Foo Fighters
    '0FZK97MXMm5mUQ8mtudjuK', // MCR
    '0fLhefnjlIV3pGNF9Wo8CD', // RHCP
    '5B4PYA7wNN4WdEXdIJu58a', // Pearl Jam
    '2guirTSEqLizK7j9i1MTTZ', // Nirvana
    '0bQglEvsHphrS19FGODEGo', // Smashing Pumpkins
    '4LaRYkT4oy47wEuQgkLBul' // RATM
  ]
};

const getIdsByGenre = (genre: string) => {
  const arr = data[genre] || [];
  return arr.join(',');
};

export default getIdsByGenre;
