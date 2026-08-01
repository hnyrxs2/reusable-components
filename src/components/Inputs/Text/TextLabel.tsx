import type { ITextLabelProps } from './types';

const TextLabel = (props: ITextLabelProps) => {
    return(<div>
        <span>{ props.value }</span>
    </div>);
};

export default TextLabel;