import { useEffect, useState } from 'react';

const ROUTE_CHANGE = 'app:routechange';

const normalize = (path: string) => {
  const trimmed = path.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
};

export const navigate = (path: string) => {
  if (normalize(window.location.pathname) !== normalize(path)) {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event(ROUTE_CHANGE));
  }
  window.scrollTo({ top: 0 });
};

export const useRoute = () => {
  const [path, setPath] = useState(() => normalize(window.location.pathname));

  useEffect(() => {
    const update = () => setPath(normalize(window.location.pathname));
    window.addEventListener('popstate', update);
    window.addEventListener(ROUTE_CHANGE, update);
    return () => {
      window.removeEventListener('popstate', update);
      window.removeEventListener(ROUTE_CHANGE, update);
    };
  }, []);

  return path;
};
