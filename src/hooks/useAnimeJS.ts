import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

export function useAnimeJS(selector: string, options: anime.AnimeParams) {
  const animationRef = useRef<anime.AnimeInstance | null>(null);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.restart();
    } else {
      animationRef.current = anime({
        targets: selector,
        ...options,
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, [selector, JSON.stringify(options)]);

  return animationRef.current;
}