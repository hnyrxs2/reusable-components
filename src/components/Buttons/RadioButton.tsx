import TextLabel from '../Inputs/Text/TextLabel';
import type { IRadioButtonProps } from './types';

const RadioButton = <T extends string>(props: IRadioButtonProps<T>) => {

    return (<div id='btn-radio-container'>
        <input type='radio' value={props.value} checked={props.checked} onChange={props.onChange} />
        <TextLabel value={props.label} />
    </div>);
};

export default RadioButton;