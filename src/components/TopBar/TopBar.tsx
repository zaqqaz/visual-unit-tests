import React from "react";
import styled from "styled-components";

export interface TopBarProps {
    title: string;
}

const Container = styled.div`
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10);
  height: 10vh;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  text-transform: uppercase;
`;

export const TopBar: React.FC<TopBarProps> = (props) => {
    const { title } = props;

    return (
        <Container>
            {title}
        </Container>
    )
}
