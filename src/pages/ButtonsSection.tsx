import Button from '../components/Buttons/Button';
import MenuButton from '../components/Buttons/MenuButton';
import type { ButtonTypes } from '../components/Buttons/types';
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

interface PrimaryButtonProperties {
  id: string;
  labelText: string;
  iconKey?: string;
  menuItems?: IMenuItem[];
  disabled?: boolean;
}

const buttonLabelMap: Record<ButtonTypes, { label: string; icon?: string }> = {
  primary: {
    label: 'Primary Button',
    icon: 'save',
  },
  secondary: {
    label: 'Secondary Button',
    icon: 'cancel',
  },
  tertiary: {
    label: 'Tertiary Button',
    icon: undefined,
  },
};

const primaryButtons = (buttonType: ButtonTypes): PrimaryButtonProperties[] => [
  {
    id: 'demo-btn',
    labelText: buttonLabelMap[buttonType].label,
  },
  {
    id: 'demo-btn',
    labelText: buttonLabelMap[buttonType].label,
    iconKey: buttonLabelMap[buttonType].icon,
  },
  {
    id: 'demo-btn',
    labelText: 'Menu Button',
    menuItems: buttonMenu,
  },
];

const getButtonPerType = (buttonType: ButtonTypes, disabled: boolean = false) =>
  primaryButtons(buttonType).map((item, key) => {
    if (item.menuItems) {
      return (
        <MenuButton
          key={key}
          id={`${item.id}-${buttonType}`}
          type={buttonType}
          labelText={item.labelText}
          onClick={() => {}}
          menuItems={item.menuItems}
          onMenuItemClick={(item) => alert(`Selected: ${item}`)}
          disabled={disabled}
        />
      );
    }
    return (
      <Button
        key={key}
        id={`${item.id}-${buttonType}`}
        type={buttonType}
        labelText={item.labelText}
        onClick={() => {
          alert('button clicked');
        }}
        iconKey={item.iconKey}
        disabled={disabled}
      />
    );
  });

const primaryBtnDesc = 'used for primary actions and main calls to action.';

const ButtonsSection = () => {
  return (
    <div id="button-demo-variations">
      <TextLabel value="Button Variants" size="xlarge" />
      <div id="button-variant-row">
        <div className="button-palette"></div>
        <div id="button-category">
          <TextLabel value="Primary" size="medium" />
          <TextLabel value={primaryBtnDesc} size="xsmall" />
        </div>
      </div>
      <div id="buttons-demo-group">
        {getButtonPerType('primary')}
        {getButtonPerType('primary', true)}
      </div>
      <TextLabel value="Secondary Buttons" />
      <div id="buttons-demo-group">
        {getButtonPerType('secondary')}
        {getButtonPerType('secondary', true)}
      </div>
      <TextLabel value="Tertiary Buttons" />
      <div id="buttons-demo-group">
        {getButtonPerType('tertiary')}
        {getButtonPerType('tertiary', true)}
      </div>
    </div>
  );
};

export default ButtonsSection;
