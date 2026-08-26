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

const buttonLabelMap: Record<
  ButtonTypes,
  { label: string; header: string; description: string; icon?: string }
> = {
  primary: {
    label: 'Primary Button',
    icon: 'save',
    header: 'Primary',
    description: 'Used for primary actions and main calls to action.',
  },
  secondary: {
    label: 'Secondary Button',
    icon: 'cancel',
    header: 'Secondary',
    description: 'Used for secondary actions that are less prominent.',
  },
  tertiary: {
    label: 'Tertiary Button',
    icon: undefined,
    header: 'Tertiary',
    description: 'Used for low emphasis actions and text-style buttons.',
  },
};

const buttonArray = (buttonType: ButtonTypes): PrimaryButtonProperties[] => [
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
  buttonArray(buttonType).map((item, key) => {
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

const getPalette = (buttonType: ButtonTypes) => {
  return (
    <div className="button-palette-container">
      <span className={`button-palette ${buttonType}`}></span>
    </div>
  );
};

const variantHeader = (buttonType: ButtonTypes) => {
  return (
    <div id="button-category">
      <div id="button-variant-header">
        {getPalette(buttonType)}
        <TextLabel value={buttonLabelMap[buttonType].header} size="medium" />
      </div>
      <TextLabel value={buttonLabelMap[buttonType].description} size="xsmall" />
    </div>
  );
};

const getButtonVariant = (buttonTypes: ButtonTypes) => {
  return (
    <div id="button-variant-row">
      {variantHeader(buttonTypes)}
      <div id="buttons-demo-group">
        {getButtonPerType(buttonTypes)}
        {getButtonPerType(buttonTypes, true)}
      </div>
    </div>
  );
};

const ButtonsSection = () => {
  return (
    <div id="button-demo-variations-wrapper">
      <div id="button-demo-variations">
        <TextLabel value="Button Variants" size="xlarge" />
        {getButtonVariant('primary')}
        {getButtonVariant('secondary')}
        {getButtonVariant('tertiary')}
      </div>
      <TextLabel size="xsmall" value="All buttons are fully accesible and keyboard navigable." />
    </div>
  );
};

export default ButtonsSection;
