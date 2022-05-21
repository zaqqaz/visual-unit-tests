import React from "react";
import "./TopBar.css";

export interface TopBarProps {
    title: string;
}

export const TopBar: React.FC<TopBarProps> = (props) => {
    const { title } = props;

    return (
        <div className={"TopBar"}>
            {title}
        </div>
    )
}
