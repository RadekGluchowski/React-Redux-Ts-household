import React, { ChangeEvent, useState } from "react";

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

  const updateInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    onButtonClick(inputValue);
    setInputValue(0);
  };

  return (
    <div>
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
