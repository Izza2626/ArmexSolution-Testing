import { useState, useEffect } from 'react';

const usePageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate minimum loading time (for smooth transition)
    const minLoadTime = 1500;
    const startTime = Date.now();
    
    // Wait for window load
    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);
      
      setTimeout(() => {
        setLoading(false);
      }, remainingTime);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return loading;
};

export default usePageLoader;