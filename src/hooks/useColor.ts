import { useEffect, useState } from 'react';
import randomColor from '../helpers/randomColor';

function useColor() {
  const [color, setColor] = useState('red');

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const newColor = randomColor();
      setColor(newColor);
    }, 2000);
    return () => {
      clearInterval(intervalRef);
    };
  }, []);

  return color;
}

export default useColor;
