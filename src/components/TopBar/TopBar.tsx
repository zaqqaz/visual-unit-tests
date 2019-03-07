import React from "react";
import "./TopBar.css";
import { Logo } from "../Logo/Logo";
import { FacebookIcon } from "../FacebookIcon/FacebookIcon";
import { TwitterIcon } from "../TwitterIcon/TwitterIcon";

export interface TopBarProps {
}

export class TopBar extends React.PureComponent<TopBarProps> {
    public render() {
        return (
            <div className={"TopBar"}>
                <div className={"logoContainer"}>
                    <Logo/>
                </div>

                <div className={"navigationContainer"}>
                    <a href="#tech">Technologies</a>
                    <a href="#tech">Open-source</a>
                    <a href="#tech">Journal</a>
                    <a href="#tech">Talks</a>
                    <a href="#tech">Jobs</a>
                    <a href="#tech">Company</a>
                </div>
                <div className={"socialContainer"}>
                    <a href="https://www.facebook.com/evoneering" target="_blank">
                        <FacebookIcon/>
                    </a>
                    <a href="https://twitter.com/evoneering" target="_blank">
                        <TwitterIcon/>
                    </a>
                </div>
            </div>
        )
    }
}
