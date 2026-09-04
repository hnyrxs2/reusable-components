import { useRef } from 'react';

import { Routes, Route } from 'react-router-dom';
import ButtonDemo from './ButtonDemo';
import InputDemo from './InputDemo';

const SCROLL_IDLE_DELAY = 1000;

const DemoPage = () => {
  const scrollTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const element = event.currentTarget;
    element.classList.add('is-scrolling');
    clearTimeout(scrollTimer.current);
    scrollTimer.current = setTimeout(() => {
      element.classList.remove('is-scrolling');
    }, SCROLL_IDLE_DELAY);
  };

  const className = ['scrollable-page'].filter(Boolean).join(' ');

  return (
    <div id={'demo-page-container'} className={className} onScroll={handleScroll}>
      <Routes>
        <Route path="/" element={<ButtonDemo />} />
        <Route path="/Input" element={<InputDemo />} />
      </Routes>
    </div>
  );
};

export default DemoPage;
