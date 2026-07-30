import TextLabel from './TextLabel';
import type { ITextInputProps } from './types';

const TextInput = (props: ITextInputProps) => {
return(<div id='textinput-container'>
    {props.label ? <TextLabel value={ props.label }/>: ''}
    <input placeholder={props.placeholder}></input>
</div>);
};

export default TextInput;