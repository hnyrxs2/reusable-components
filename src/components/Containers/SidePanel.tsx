import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import CustomHeader from '../Headers/CustomHeader';
import { ClickableIcon, ClickButtonIcon, HamburgerMenu, TextInputIcon } from '../Icons';
import AppInfo from './AppInfo';
import TextLabel from '../Inputs/Text/TextLabel';

const navItems = [
  { to: '/', label: 'Button', icon: <ClickButtonIcon /> },
  { to: '/Input', label: 'Input', icon: <TextInputIcon /> },
];

const SidePanel = () => {
  const [collapsed, setCollapsed] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (collapsed) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setCollapsed(true);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [collapsed]);

  const sidePanelIcon = (
    <ClickableIcon
      ariaLabel={collapsed ? 'Expand navigation menu' : 'Collapse navigation menu'}
      onClick={() => setCollapsed((collapsed) => !collapsed)}
    >
      <HamburgerMenu ariaLabel={'Toggle navigation menu'} />
    </ClickableIcon>
  );

  const navigationItems = () => (
    <>
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
          >
            <TextLabel value={item.label} icon={item.icon} size="medium" tabIndex={-1} />
          </NavLink>
        ))}
      </nav>
      <AppInfo />
    </>
  );

  return (
    <div id="side-panel-container" ref={containerRef}>
      <div className="side-panel-mobile">
        {sidePanelIcon}
        <div className={`floating-panel${collapsed ? '' : ' open'}`} aria-hidden={collapsed}>
          <CustomHeader label="My Components" icon={sidePanelIcon} headerSize="large" />
          {navigationItems()}
        </div>
      </div>
      <div className={`side-panel-web${collapsed ? ' collapsed' : ' expanded'}`}>
        <CustomHeader label="My Components" icon={sidePanelIcon} headerSize="large" />
        <div className="side-panel-web-nav" aria-hidden={collapsed}>
          {navigationItems()}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
