import { useEffect, useState } from 'react';

const useScroll = () => {
  const [currentScroll, setCurrentScroll] = useState<number>(0);

  useEffect(() => {
    setCurrentScroll(document.documentElement.scrollTop);
  });

  return {
    currentScroll,
  };
};

export default useScroll;
