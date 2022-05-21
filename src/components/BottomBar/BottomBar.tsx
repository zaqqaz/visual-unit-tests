import React from "react";
import { HotDog } from "../HotDog/HotDog";
import { Burger } from "../Burger/Burger";
import { Taco } from "../Taco/Taco";
import styled from "styled-components";

export enum BottomBarItems {
    HotDog = "HotDog",
    Burger = "Burger",
    Taco = "Taco",
}

export interface BottomBarProps {
    activeItem: BottomBarItems;
    onClick: (item: BottomBarItems) => void;
}

const Container = styled.div`
  background: #fff;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.10);
  height: 10vh;
  font-size: 24px;
  text-align: center;
  display: flex;
`;


const Item = styled.div<{ active: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgba(0, 0, 0, 0.10);
  background ${props => (props.active ? 'rgba(0, 0, 0, 0.10)' : 'transparent')};

  &:last-child {
    border-right: none;
  }

  svg {
    width: 100%;
    height: 60%;
  }
`;

export const BottomBar: React.FC<BottomBarProps> = (props) => {
    const { activeItem, onClick } = props;

    return (
        <Container>
            <Item
                data-button="HotDog"
                active={activeItem === BottomBarItems.HotDog}
                onClick={() => onClick(BottomBarItems.HotDog)}
            >
                <HotDog />
            </Item>
            <Item
                data-button="Burger"
                active={activeItem === BottomBarItems.Burger}
                onClick={() => onClick(BottomBarItems.Burger)}
            >
                <Burger />
            </Item>
            <Item
                data-button="Taco"
                active={activeItem === BottomBarItems.Taco}
                onClick={() => onClick(BottomBarItems.Taco)}
            >
                <Taco />
            </Item>
        </Container>
    )
}
