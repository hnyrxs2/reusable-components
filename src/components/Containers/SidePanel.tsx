import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import CustomHeader from '../Headers/CustomHeader';
import { ClickableIcon, HamburgerMenu, SettingsIcon, PreviewIcon } from '../Icons';
import AppInfo from './AppInfo';
import TextLabel from '../Inputs/Text/TextLabel';

const navItems = [
  { to: '/', label: 'Button', icon: <PreviewIcon /> },
  { to: '/Input', label: 'Input', icon: <SettingsIcon /> },
];

const SidePanel = () => {
  const [collapsed, setCollapsed] = useState(true);

  const sidePanelIcon = (
    <ClickableIcon
      ariaLabel={collapsed ? 'Expand navigation menu' : 'Collapse navigation menu'}
      onClick={() => setCollapsed((collapsed) => !collapsed)}
    >
      <HamburgerMenu ariaLabel={'Toggle navigation menu'} />
    </ClickableIcon>
  );

  return (
    <div id="side-panel-container" className={collapsed ? 'collapsed' : undefined}>
      <CustomHeader label="My Components" icon={sidePanelIcon} headerSize="large" />
      {!collapsed && (
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
      )}
    </div>
  );
};

export default SidePanel;
