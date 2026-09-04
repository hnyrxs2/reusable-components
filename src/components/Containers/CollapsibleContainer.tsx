import { CaretDown, CaretUp, ClickableIcon } from '../Icons';
import type { IconProps } from '../Icons';
import CustomHeader from '../Headers/CustomHeader';
import type { ICollapsibleContainerProps } from './types';
import type { ICustomHeaderProps } from '../Headers/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { expandCollapseSection } from '../../store/uiSlice';
import TextLabel from '../Inputs/Text/TextLabel';

const CollapsibleContainer = (props: ICollapsibleContainerProps & ICustomHeaderProps) => {
  const dispatch = useAppDispatch();
  const section = useAppSelector((state) => state.ui.collapsibleSections[props.id]);
  const previewCollapsed = section ? section.collapsed : false;

  const getCaret = () => {
    const iconProps: IconProps = {
      height: 25,
      width: 25,
      ariaLabel: previewCollapsed ? 'expand section' : 'collapse section',
    };
    const onExpandCollapse = () => {
      dispatch(expandCollapseSection(props.id, !previewCollapsed));
    };
    return (
      <ClickableIcon onClick={onExpandCollapse}>
        {previewCollapsed ? <CaretDown {...iconProps} /> : <CaretUp {...iconProps} />}
      </ClickableIcon>
    );
  };

  const collapsibleSection = (
    <>
      <div id="collapsible-header">
        <CustomHeader label={props.label} icon={props.icon} headerSize={props.headerSize} />
        <div id="custom-header-expand-collapse">{getCaret()}</div>
      </div>
      <div className={`collapsible-body${previewCollapsed ? ' collapsed' : ''}`}>
        {props.children}
      </div>
    </>
  );
  return (
    <div id="collapsible-container">
      {section ? collapsibleSection : <TextLabel value="No Section Available." size="medium" />}
    </div>
  );
};

export default CollapsibleContainer;
