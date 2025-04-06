"use client";
import { register } from "@/app/_api/auth/register";
import InputBox from "@/app/_components/InputBox";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    register({ password, name, email })
      .then(() => router.push("/"))
      .catch((err: string) => {
        alert("회원가입에 실패했습니다.");
        console.error(err);
      });
  };

  return (
    <Container>
      <FormWrapper
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <InputWrapper>
          <InputTitle>Cat Email</InputTitle>
          <InputBox
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Enter Email"
            required
          ></InputBox>
        </InputWrapper>
        <InputWrapper>
          <InputTitle>Cat Name</InputTitle>
          <InputBox
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Enter name"
            required
          ></InputBox>
        </InputWrapper>
        <InputWrapper>
          <InputTitle>Cat Password</InputTitle>
          <InputBox
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter password"
            required
          ></InputBox>
        </InputWrapper>
        <SubmitButton type="submit">Sign up</SubmitButton>
      </FormWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background-color: #f7f8f9;
`;

const FormWrapper = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  max-width: 600px;
  width: 100%;

  height: auto;

  gap: 14px;
`;

const InputTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #0c0c0c;

  letter-spacing: -0.15px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #e0234e;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
`;
