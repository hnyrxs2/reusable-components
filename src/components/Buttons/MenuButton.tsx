import { useState, useRef, useEffect } from 'react';
import type { IDropdownButtonProps } from './types';
import { ArrowDown } from '../Icons';
import type { IconProps } from '../Icons/types';
import BaseButton from './BaseButton';
import ContextMenu from '../Menu/ContextMenu';

const iconProps: IconProps = { height: 15, width: 15 };

const MenuButton = (props: IDropdownButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen((prev) => !prev);
    props.onClick(event);
  };

  const handleItemClick = (item: string) => {
    setIsOpen(false);
    if (props.onMenuItemClick) {
      props.onMenuItemClick(item);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
    if (props.onKeyDown) {
      props.onKeyDown(event);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const buttonClassMap = {
    primary: 'primary-btn',
    secondary: 'secondary-btn',
    tertiary: 'tertiary-btn',
  };

  const buttonClass = buttonClassMap[props.type];
  const disabledClass = props.disabled ? 'btn-disable' : '';

  return (
    <div id="button-wrapper" ref={containerRef} style={{ position: 'relative' }}>
      <BaseButton
        id={props.id}
        className={`btn-container ${buttonClass} ${disabledClass}`}
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        disabled={props.disabled}
        ariaLabel={props.ariaLabel}
        ariaDisabled={props.ariaDisabled}
        ariaHasPopup={true}
        ariaExpanded={isOpen}
      >
        <span>{props.labelText || 'Button'}</span>
        <ArrowDown {...iconProps} />
      </BaseButton>
      {isOpen && (
        <ContextMenu
          menuItems={props.menuItems}
          onItemClick={handleItemClick}
          ariaLabel={props.ariaLabel || props.labelText}
        />
      )}
    </div>
  );
};

export default MenuButton;
