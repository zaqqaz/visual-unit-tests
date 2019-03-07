import React from "react";
import "./Tag.css";

export interface TagProps {
    label: string;
    bgColor?: string;
    textColor?: string;
}

export class Tag extends React.PureComponent<TagProps> {
    public render() {
        const {
            label,
            bgColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
            textColor = "#fff",
        } = this.props;

        return (
            <div className={"Tag"} style={{ background: bgColor, color: textColor }}>
                {label}
            </div>
        )
    }
}
