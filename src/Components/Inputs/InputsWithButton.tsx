import React, { ChangeEvent, useState } from "react";

interface InputsWithButtonProps {
  onButtonClick(resources: number): void;
  buttonText: string;
  inputType: string;
  inputPlaceHolder: string;
  inputName: string;
}

export const InputsWithButton: React.FC<InputsWithButtonProps> = ({
  onButtonClick,
  buttonText,
  inputType,
  inputPlaceHolder,
  inputName,
}) => {
  const [inputValue, setInputValue] = useState<any>(null);

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
