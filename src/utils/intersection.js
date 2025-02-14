export const createIntersectionObserver = (callback, options = { threshold: 0.1 }) => {
    if (typeof window === 'undefined') return null;
    return new IntersectionObserver((entries) => {
      entries.forEach(callback);
    }, options);
  };
  