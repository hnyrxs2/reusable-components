import { Link } from 'react-router-dom';
import CustomHeader from '../Headers/CustomHeader';
import { ClickableIcon, HamburgerMenu } from '../Icons';
import AppInfo from './AppInfo';

const SidePanel = () => {
  const sidePanelIcon = (
    <ClickableIcon onClick={() => console.log('menu clicked')}>
      <HamburgerMenu ariaLabel={'Open navigation menu'} />
    </ClickableIcon>
  );
  return (
    <div id="side-panel-container">
      <CustomHeader label="My Components" icon={sidePanelIcon} headerSize="large" />
      <nav>
        <Link to="/">Buttons</Link>
        <Link to="/Input">Input</Link>
      </nav>
      <AppInfo />
    </div>
  );
};

export default SidePanel;
