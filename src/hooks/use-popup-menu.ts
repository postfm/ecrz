import { useState } from 'react';
import { useOutsideClick } from './use-outside-click';

export function usePopupMenu<T extends HTMLElement>() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useOutsideClick<T>(() => {
    isOpen ? setIsOpen(!isOpen) : setIsOpen(false);
  });

  function toggle() {
    setIsOpen(!isOpen);
  }

  return { ref, isOpen, toggle };
}
