import { useState } from 'react';
import Button from '../components/Buttons/Button';
import TextInput from '../components/Text/TextInput';
import type { ButtonTypes } from '../components/Buttons/types';
import RadioButton from '../components/Buttons/RadioButton';

const ButtonDemo = () => {
    const [buttonType, setButtonType] = useState<ButtonTypes>('primary');
    const updateButtonType = (e: React.ChangeEvent<HTMLInputElement>) => setButtonType(e.target.value as ButtonTypes);

    return (<div>
        <TextInput label='Width' />
        <TextInput label='Height' />
        <RadioButton id='button-demo-1' value='primary' checked={buttonType === 'primary'} onChange={updateButtonType} label='Primary' />
        <RadioButton id='button-demo-2' value='secondary' checked={buttonType === 'secondary'} onChange={updateButtonType} label='Secondary' />
        <Button id='demo-primary-secondary' type={buttonType} labelText='Demo button' />
    </div>);
};

export default ButtonDemo;