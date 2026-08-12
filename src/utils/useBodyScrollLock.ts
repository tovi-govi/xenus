import { useEffect } from 'react';

/**
 * Custom React hook to safely disable background body scrolling when a modal or overlay is open.
 * Guarantees that body overflow is restored to original state when unmounted or closed.
 */
export const useBodyScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isLocked) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalStyle === 'hidden' ? '' : originalStyle;
    };
  }, [isLocked]);
};
