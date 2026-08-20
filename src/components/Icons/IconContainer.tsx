import type { JSX } from 'react';

export const IconContainer = (props: { children: JSX.Element }) => {
  return <div id="icon-container">{props.children}</div>;
};
