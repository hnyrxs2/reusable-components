import type { IconProps } from './types';

export const ArrowDown = (props: IconProps) => {
  const height = props.height || '20';
  const width = props.width || '20';

  return (
    <div id="icon-container">
      <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        {/* <rect x="0" fill="none" width="24" height="24" /> */}
        <g>
          <path d="M7 10l5 5 5-5" fill="currentColor" />
        </g>
      </svg>
    </div>
  );
};
