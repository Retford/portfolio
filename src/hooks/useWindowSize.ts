import { useSyncExternalStore } from 'react';

const subscribe: (callback: () => void) => () => void = (callback) => {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
};

const getSnapshot = () => window.innerWidth;

export const useWindowSize = () => {
  return useSyncExternalStore(subscribe, getSnapshot);
};
