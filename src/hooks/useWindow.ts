import { useSyncExternalStore } from 'react';

const createSubscriber = (
  event: keyof WindowEventMap,
  getSnapshot: () => number
) => {
  const subscribe = (callback: () => void) => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  };
  return { subscribe, getSnapshot };
};

export const useWindow = () => {
  const widthSubscriber = createSubscriber('resize', () => window.innerWidth);
  const scrollSubscriber = createSubscriber('scroll', () => window.scrollY);

  const windowWidth = useSyncExternalStore(
    widthSubscriber.subscribe,
    widthSubscriber.getSnapshot
  );

  const windowScroll = useSyncExternalStore(
    scrollSubscriber.subscribe,
    scrollSubscriber.getSnapshot
  );

  return { windowWidth, windowScroll };
};
