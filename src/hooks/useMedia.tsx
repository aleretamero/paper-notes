import { useEffect, useState } from 'react';

export const useMedia = (media: string) => {
  const [match, setMatch] = useState<boolean | null>(null);

  useEffect(() => {
    const changeMatch = () => {
      const { matches } = matchMedia(media);
      setMatch(matches);
    };

    changeMatch();
    addEventListener('resize', changeMatch);

    return () => {
      removeEventListener('resize', changeMatch);
    };
  }, [media]);

  return match;
};
