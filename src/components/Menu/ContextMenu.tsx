import { useState, useEffect, useRef } from 'react';
import type { IContextMenuProps } from './types';

const ContextMenu = (props: IContextMenuProps) => {
  const { menuItems, onItemClick, ariaLabel } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  // Focus the active item when menu opens or active index changes
  useEffect(() => {
    const items = listRef.current?.querySelectorAll<HTMLLIElement>('[role="menuitem"]');
    items?.[activeIndex]?.focus();
  }, [activeIndex]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setActiveIndex((prev) => (prev + 1) % menuItems.length);
        break;
      case 'ArrowUp':
        event.preventDefault();
        setActiveIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
        break;
      case 'Home':
        event.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setActiveIndex(menuItems.length - 1);
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        onItemClick(menuItems[activeIndex]);
        break;
      case 'Escape':
        onItemClick('');
        break;
    }
  };

  return (
    <div id="contextmenu-container" onKeyDown={handleKeyDown}>
      <div className="contextmenu-arrow" />
      <ul id="contextmenu-popup" ref={listRef} role="menu" aria-label={ariaLabel || 'Menu'}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            role="menuitem"
            tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => onItemClick(item)}
          >
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContextMenu;
