"use client";
import styled from "styled-components";

type Props = {
  type: HTMLInputElement["type"];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
};
export default function InputBox({
  type,
  value,
  onChange,
  placeholder,
  required,
}: Props) {
  return (
    <>
      <InputWrapper>
        <Input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </InputWrapper>
    </>
  );
}

const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  gap: 4px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;

  padding: 4px 12px;

  border: 1px solid #0c0c0c;

  color: #0c0c0c;

  &::placeholder {
    color: #d9d9d9;
  }

  background-color: #fff;
`;
