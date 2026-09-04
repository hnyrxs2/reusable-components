import { IconContainer } from './IconContainer';
import type { IconProps } from './types';

export const InfoIcon = (props: IconProps) => {
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
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fillRule="evenodd" />
        <path
          d="M12 17V11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fillRule="evenodd"
        />
        <circle
          cx="1"
          cy="1"
          r="1"
          transform="matrix(1 0 0 -1 11 9)"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </IconContainer>
  );
};
