"use client";

import styled from "styled-components";
import Image from "next/image";

import Logo from "../../../public/images/Logo.svg";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header>
        <Image src={Logo} alt="NestJS LOGO" width={40} height={40} />
        <Title>Cat Information Community</Title>
      </Header>
      {children}
    </div>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  width: 100vw;
  height: 60px;

  padding: 6px;

  background-color: #0c0c0c;
  gap: 8px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.25px;
`;
