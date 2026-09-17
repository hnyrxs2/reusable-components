import { IconContainer } from './IconContainer';
import type { IconProps } from './types';

export const TextInputIcon = (props: IconProps) => {
  const { height, width, ariaLabel } = props;
  return (
    <IconContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width || 25}
        height={height || 25}
        role={ariaLabel ? 'img' : undefined}
        aria-label={ariaLabel}
        aria-hidden={ariaLabel ? undefined : true}
        focusable={ariaLabel ? true : false}
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-text-cursor-input"
      >
        <path d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6" />
        <path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" />
        <path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" />
        <path d="M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1" />
        <path d="M9 6v12" />
      </svg>
    </IconContainer>
  );
};
