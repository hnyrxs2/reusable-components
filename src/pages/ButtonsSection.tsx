import Button from '../components/Buttons/Button';
import MenuButton from '../components/Buttons/MenuButton';
import TextLabel from '../components/Inputs/Text/TextLabel';
import type { IMenuItem } from '../components/Menu/types';

const buttonMenu: IMenuItem[] = [
  {
    value: 'Option 1',
    disabled: false,
  },
  {
    value: 'Option 2 is longer one',
    disabled: true,
  },
  {
    value: 'Option 3',
    disabled: false,
  },
];
const ButtonsSection = () => {
  return (
    <div id="button-demo-variations">
      <TextLabel value="Primary Buttons" />
      <div id="buttons-demo-group">
        <Button
          id="demo-primary-btn"
          type="primary"
          labelText="Primary Button"
          onClick={() => {
            alert('button clicked');
          }}
        />
        <Button
          id="demo-primary-btn"
          type="primary"
          labelText="Primary Button"
          onClick={() => {
            alert('button clicked');
          }}
          iconKey="save"
        />
        <MenuButton
          id="demo-menu-primary-btn"
          type="primary"
          labelText="Menu Button"
          onClick={() => {}}
          menuItems={buttonMenu}
          onMenuItemClick={(item) => alert(`Selected: ${item}`)}
        />

        <Button
          id="demo-primary-btn"
          type="primary"
          labelText="Primary Button"
          onClick={() => {
            alert('button clicked');
          }}
          disabled={true}
        />
        <Button
          id="demo-primary-btn"
          type="primary"
          labelText="Primary Button"
          onClick={() => {
            alert('button clicked');
          }}
          iconKey="save"
          disabled={true}
        />
        <MenuButton
          id="demo-menu-primary-btn"
          type="primary"
          labelText="Menu Button"
          onClick={() => {}}
          menuItems={buttonMenu}
          onMenuItemClick={(item) => alert(`Selected: ${item}`)}
          disabled={true}
        />
      </div>
      <TextLabel value="Secondary Buttons" />
      <div id="buttons-demo-group">
        <Button
          id="demo-secondary-btn"
          type="secondary"
          labelText="Secondary Button"
          onClick={() => {
            alert('button clicked');
          }}
          iconKey="cancel"
        />
        <Button
          id="demo-secondary-btn"
          type="secondary"
          labelText="Secondary Button"
          onClick={() => {
            alert('button clicked');
          }}
        />
        <MenuButton
          id="demo-menu-secondary-btn"
          type="secondary"
          labelText="Menu Button"
          onClick={() => {}}
          menuItems={buttonMenu}
          onMenuItemClick={(item) => alert(`Selected: ${item}`)}
        />
        <Button
          id="demo-secondary-btn"
          type="secondary"
          labelText="Secondary Button"
          onClick={() => {
            alert('button clicked');
          }}
          iconKey="cancel"
          disabled={true}
        />
        <Button
          id="demo-secondary-btn"
          type="secondary"
          labelText="Secondary Button"
          onClick={() => {
            alert('button clicked');
          }}
          disabled={true}
        />
        <MenuButton
          id="demo-menu-secondary-btn"
          type="secondary"
          labelText="Menu Button"
          onClick={() => {}}
          menuItems={buttonMenu}
          onMenuItemClick={(item) => alert(`Selected: ${item}`)}
          disabled={true}
        />
      </div>
      <TextLabel value="Tertiary Buttons" />
      <div id="buttons-demo-group">
        <Button
          id="demo-tertiary-btn"
          type="tertiary"
          labelText="Tertiary Button"
          onClick={() => {
            alert('button clicked');
          }}
        />
        <MenuButton
          id="demo-menu-tertiary-btn"
          type="tertiary"
          labelText="Menu Button"
          onClick={() => {}}
          menuItems={buttonMenu}
          onMenuItemClick={(item) => alert(`Selected: ${item}`)}
        />
        <Button
          id="demo-tertiary-btn"
          type="tertiary"
          labelText="Tertiary Button"
          onClick={() => {
            alert('button clicked');
          }}
          disabled={true}
        />
        <MenuButton
          id="demo-menu-tertiary-btn"
          type="tertiary"
          labelText="Menu Button"
          onClick={() => {}}
          menuItems={buttonMenu}
          onMenuItemClick={(item) => alert(`Selected: ${item}`)}
          disabled={true}
        />
      </div>
    </div>
  );
};

export default ButtonsSection;
