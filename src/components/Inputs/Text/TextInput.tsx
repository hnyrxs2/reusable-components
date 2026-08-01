import TextLabel from './TextLabel';
import type { ITextInputProps } from './types';

const TextInput = (props: ITextInputProps) => {
return(<div id='textinput-container'>
    {props.label ? <TextLabel value={ props.label }/>: ''}
    <input placeholder={props.placeholder} onChange={props.onChange} onBlur={props.onBlur} />
</div>);
};

export default TextInput;