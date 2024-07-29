import { useEffect, useRef } from 'react';

export function useOutsideClick(onOutsideClick) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(evt) {
      if (ref.current && !ref.current.contains(evt.target)) {
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
