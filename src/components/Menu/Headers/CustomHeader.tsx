import TextLabel from '../../Inputs/Text/TextLabel';
import type { ICustomHeaderProps } from './types';

const CustomHeader = (props: ICustomHeaderProps) => {
  return (
    <div id="custom-header">
      <div id="custom-header-title-icon">
        <div tabIndex={-1}>{props.icon}</div>
        <TextLabel value={props.label} size={props.size ? props.size : 'xlarge'} />
      </div>
      {props.description ? <TextLabel value={props.description} /> : null}
    </div>
  );
};

export default CustomHeader;
