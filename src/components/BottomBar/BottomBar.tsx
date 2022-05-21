import React from "react";
import "./BottomBar.css";
import { HotDog } from "../HotDog/HotDog";
import { Burger } from "../Burger/Burger";
import { Taco } from "../Taco/Taco";

export enum BottomBarItems {
    HotDog = "HotDog",
    Burger = "Burger",
    Taco = "Taco",
}

export interface BottomBarProps {
    activeItem: BottomBarItems;
    onClick: (item: BottomBarItems) => void;
}

export const BottomBar: React.FC<BottomBarProps> = (props) => {
    const { activeItem, onClick } = props;

    return (
        <div className={"BottomBar"}>
            <div
                data-button="HotDog"
                className={"BottomBarItem " + (activeItem === BottomBarItems.HotDog && "active")}
                onClick={() => onClick(BottomBarItems.HotDog)}
            >
                <HotDog />
            </div>
            <div
                data-button="Burger"
                className={"BottomBarItem " + (activeItem === BottomBarItems.Burger && "active")}
                onClick={() => onClick(BottomBarItems.Burger)}
            >
                <Burger />
            </div>
            <div
                data-button="Taco"
                className={"BottomBarItem " + (activeItem === BottomBarItems.Taco && "active")}
                onClick={() => onClick(BottomBarItems.Taco)}
            >
                <Taco />
            </div>
        </div>
    )
}
