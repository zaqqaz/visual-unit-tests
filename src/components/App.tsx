import React from "react";
import styled from "styled-components";
import { TopBar } from "./TopBar/TopBar";
import { BottomBar, BottomBarItems } from "./BottomBar/BottomBar";
import { Burger } from "./Burger/Burger";
import { HotDog } from "./HotDog/HotDog";
import { GlobalStyle } from "./GlobalStyle";

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  
  svg {
    width: 100%;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const HotDogContainer = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 100;
`;

export const App: React.FC = () => {
    const [activeItem, setActiveItem] = React.useState(BottomBarItems.HotDog);

    return (
        <Container>
            <GlobalStyle />
            <TopBar title={"HotDog Burger Taco"} />
            <Content>
                {activeItem === BottomBarItems.HotDog && (
                    <HotDogContainer>
                        Just a hot dog
                        <HotDog />
                    </HotDogContainer>
                )}
                {activeItem === BottomBarItems.Burger && <Burger />}
                {activeItem === BottomBarItems.Taco && (
                    <div>A taco (/ˈtɑːkoʊ/, UK also /ˈtækoʊ/, Spanish: [ˈtako]) is a traditional Mexican dish
                        consisting of a corn or wheat tortilla folded or rolled around a filling. A taco can be
                        made with a variety of fillings, including beef, pork, chicken, seafood, vegetables, and
                        cheese, allowing great versatility and variety. Tacos are generally eaten without
                        utensils, often garnished with salsa, chili pepper, avocado, guacamole, cilantro
                        (coriander), tomatoes, onions, and lettuce.
                    </div>
                )}
            </Content>
            <BottomBar onClick={setActiveItem} activeItem={activeItem} />
        </Container>
    );
};
