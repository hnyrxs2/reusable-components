import TextLabel from '../../Inputs/Text/TextLabel';
import type { ICustomHeaderProps } from './types';

const CustomHeader = (props: ICustomHeaderProps) => {
  return (
    <div id="custom-header">
      <div id="custom-header-title-icon">
        {props.icon ? (
          <div tabIndex={-1} id="custom-header-icon">
            {props.icon}
          </div>
        ) : null}
        <TextLabel value={props.label} size={props.size ? props.size : 'xlarge'} />
      </div>
      {props.description ? <TextLabel value={props.description} /> : null}
    </div>
  );
};

export default CustomHeader;
