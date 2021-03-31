import React, { ChangeEvent, useCallback, useState } from "react";
import './InputWithButton.css'

interface InputWithButtonProps {
  onButtonClick(resources: number): void;
  buttonText: string;
  inputType: string;
  inputPlaceHolder: string;
  inputName: string;
}

export const InputWithButton: React.FC<InputWithButtonProps> = ({
  onButtonClick,
  buttonText,
  inputType,
  inputPlaceHolder,
  inputName,
}) => {
  const [inputValue, setInputValue] = useState<any>(undefined);

  const updateInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }, []);

  const handleButtonClick = useCallback(() => {
    onButtonClick(inputValue);
    setInputValue(0);
  }, [inputValue, onButtonClick]);

  return (
    <div className="input-with-button">
      <input
        onChange={updateInput}
        value={inputValue}
        type={inputType}
        name={inputName}
        placeholder={inputPlaceHolder}
      />
      <button onClick={handleButtonClick}> {buttonText} </button>
    </div>
  );
};
