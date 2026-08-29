import type { JSX } from 'react';

export const ClickableIcon = (props: { children: JSX.Element; onClick: () => void }) => {
  return (
    <div id="clickable-icon-container" onClick={props.onClick}>
      {props.children}
    </div>
  );
};
