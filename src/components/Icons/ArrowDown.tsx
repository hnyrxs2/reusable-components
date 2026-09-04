import { IconContainer } from './IconContainer';
import type { IconProps } from './types';

export const ArrowDown = (props: IconProps) => {
  const { height, width, ariaLabel } = props;
  return (
    <IconContainer>
      <svg
        width={width || 20}
        height={height || 20}
        role={ariaLabel ? 'img' : undefined}
        aria-label={ariaLabel}
        aria-hidden={ariaLabel ? undefined : true}
        focusable={ariaLabel ? true : false}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <rect x="0" fill="none" width="24" height="24" /> */}
        <g>
          <path d="M7 10l5 5 5-5" fill="currentColor" />
        </g>
      </svg>
    </IconContainer>
  );
};
