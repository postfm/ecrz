import { useEffect, useRef } from 'react';

export function useOutsideClick<T extends HTMLElement>(
  onOutsideClick: () => void,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    function handleClick(evt: MouseEvent) {
      if (ref.current && !ref.current.contains(evt.target as Node)) {
        onOutsideClick();
      }
    }

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [onOutsideClick]);

  return ref;
}
