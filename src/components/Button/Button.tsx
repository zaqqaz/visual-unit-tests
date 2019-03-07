import React from "react";
import "./Button.css";

export enum ButtonTheme {
    Light = "light",
    Dark = "dark",
}

export interface ButtonProps {
    theme: ButtonTheme;
    label: string;
    onClick?: () => void;
}

export class Button extends React.PureComponent<ButtonProps> {
    public render() {
        const { theme, label, onClick } = this.props;

        return (
            <div className={["Button", theme].join(" ")} onClick={onClick}>
                {label}
            </div>
        )
    }
}
