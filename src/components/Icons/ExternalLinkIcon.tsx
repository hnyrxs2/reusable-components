import { IconContainer } from './IconContainer';
import type { IconProps } from './types';

export const ExternalLinkIcon = (props: IconProps) => {
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
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <polyline points="8.25 2.75,2.75 2.75,2.75 13.25,13.25 13.25,13.25 7.75" />
        <path d="m13.25 2.75-5.5 5.5m3-6.5h3.5v3.5" />
      </svg>
    </IconContainer>
  );
};
