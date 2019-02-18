import React from "react";
import "./TopBar.css";
export interface TopBarProps {
    title: string;
}

export class TopBar extends React.PureComponent<TopBarProps> {
    public render() {
        const { title } = this.props;

        return (
            <div className={"TopBar"}>
                {title}
            </div>
        )
    }
}
