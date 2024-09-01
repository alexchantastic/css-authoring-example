import { ReactNode } from "react";
import styled from "styled-components";

const vars = {
  color: {
    background: "#fff",
    border: "#e9ecef",
  },
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  radius: "12px",
};

const StyledCard = styled.div`
  max-width: 300px;
  font-family: ${vars.font};
  background: ${vars.color.background};
  border: 1px solid ${vars.color.border};
  border-radius: ${vars.radius};
  padding: 24px;
  transition: box-shadow 0.4s ease;

  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
  }

  img {
    display: block;
    width: 100%;
    border-radius: ${vars.radius};
  }
`;

interface CardProps {
  src: string;
  title: string;
  children: ReactNode;
}

export function Card(props: CardProps) {
  const { src, title, children } = props;
  return (
    <StyledCard>
      <img src={src} />
      <h2>{title}</h2>
      {children}
    </StyledCard>
  );
}
