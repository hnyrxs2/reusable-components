import { useState } from 'react';
import { WarningIcon } from '../../Icons/WarningIcon';
import TextLabel from './TextLabel';
import type { ITextInputProps } from './types';

const TextInput = (props: ITextInputProps) => {
  const textInputClass = `textinput-container ${props.orientation === 'horizontal' ? 'horizontal-disp' : 'vertical-disp'}`;

  const { infoMessage, regexValidation, label } = props;
  const [regexError, setRegexError] = useState(false);

  const showError = props.hasError || regexError;
  const errorMessage = showError ? props.errorMessage : undefined;

  const validate = (value: string) => {
    if (regexValidation && value !== '') {
      setRegexError(!regexValidation.test(value));
    }
  };

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e);
    }
    if (e.currentTarget.value === '' && showError) {
      setRegexError(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      validate(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validate(e.currentTarget.value);
    props.onBlur?.(e);
  };

  const getSubMessage = () => {
    if (!errorMessage && !infoMessage) return null;

    return (
      <div id="textinput-submsg">
        {errorMessage && (
          <div id="textinput-error-msg">
            <WarningIcon width={10} height={'1em'} ariaLabel="Error" />
            <TextLabel value={errorMessage} />
          </div>
        )}
        {infoMessage && (
          <div id="textinput-info-msg">
            <TextLabel value={infoMessage} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={textInputClass}>
      {label ? <TextLabel value={label} /> : null}
      <input
        placeholder={props.placeholder}
        onChange={handleOnchange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        id={props.id}
        type={props.type === 'password' ? 'password' : undefined}
      ></input>
      {getSubMessage()}
    </div>
  );
};

export default TextInput;
