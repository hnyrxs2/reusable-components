import { useState } from 'react';
import CollapsibleContainer from '../components/Containers/CollapsibleContainer';
import CustomHeader from '../components/Headers/CustomHeader';
import TextInput from '../components/Inputs/Text/TextInput';
import type { ITextInputProps } from '../components/Inputs/Text/types';
import Toast from '../components/Toast/Toast';
import { CollapsibleSections } from './types';

const headerDescription = 'Form inputs and text elements and displaying information.';
const textInputDemoItems: ITextInputProps[] = [
  {
    id: 'text-input-demo-basic',
    type: 'basic',
    label: 'Basic Input',
  },
  {
    id: 'text-input-demo-witherror',
    type: 'basic',
    label: 'Basic Input with error',
    hasError: true,
    errorMessage: 'Please enter a valid value.',
  },
  {
    id: 'text-input-demo-pw',
    type: 'password',
    label: 'Password Input',
    infoMessage: 'Must be at least 8 characters.',
    regexValidation: /^\S{8,}$/,
    errorMessage: 'Must be at least 8 characters with no spaces.',
  },
];

const InputDemo = () => {
  const [toast, setToast] = useState<string | null>(null);

  const getTextInputs = () => {
    return textInputDemoItems.map((textProps) => {
      const demoBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (textProps.type !== 'password') {
          console.log(e.currentTarget.value);
          setToast(e.currentTarget.value);
        }
      };
      return <TextInput key={textProps.id} {...textProps} onBlur={demoBlur} />;
    });
  };

  return (
    <div id="input-demo-page">
      <CustomHeader label="Inputs and Texts" description={headerDescription} />
      <div id="input-demo-container">
        <CollapsibleContainer
          id={CollapsibleSections.TextArea}
          label={'Text Area Inputs'}
          headerSize="medium"
        >
          <div id="input-demo-textarea">
            <div id="textarea-variants">{getTextInputs()}</div>
          </div>
        </CollapsibleContainer>
      </div>
      <Toast
        message={toast ?? ''}
        isVisible={!!toast}
        onDismiss={() => {
          setToast(null);
        }}
      />
    </div>
  );
};

export default InputDemo;
