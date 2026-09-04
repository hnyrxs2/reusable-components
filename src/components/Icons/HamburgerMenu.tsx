import { IconContainer } from './IconContainer';
import type { IconProps } from './types';

export const HamburgerMenu = (props: IconProps) => {
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
        fillRule="evenodd"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </IconContainer>
  );
};
