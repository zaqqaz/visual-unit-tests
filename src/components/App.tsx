import React from "react";
import "./App.css";
import { TopBar } from "./TopBar/TopBar";
import { Tag } from "./Tag/Tag";
import { Button, ButtonTheme } from "./Button/Button";

class App extends React.PureComponent {
    render() {
        return (
            <div className="App">
                <div className="topBarContainer">
                    <div className="contentContainer">
                        <TopBar/>
                    </div>
                </div>
                <div className="mainInfoContainer">
                    <div className="contentContainer">
                        <div className="slogan">
                            We are the leading provider of B2B gaming solutions which believe in sharing our
                            technology leadership with the community.
                        </div>

                        <div className="tags">
                            <Tag label={"Scala"}/>
                            <Tag label={"JS"}/>
                            <Tag label={"TypeScript"}/>
                            <Tag label={"Scala"}/>
                            <Tag label={"JS"}/>
                            <Tag label={"TypeScript"}/>
                            <Tag label={"Scala"}/>
                            <Tag label={"JS"}/>
                            <Tag label={"TypeScript"}/>
                            <Tag label={"Scala"}/>
                            <Tag label={"JS"}/>
                            <Tag label={"TypeScript"}/>
                            <Tag label={"Scala"}/>
                            <Tag label={"JS"}/>
                            <Tag label={"TypeScript"}/>
                            <Tag label={"Scala"}/>
                            <Tag label={"JS"}/>
                            <Tag label={"TypeScript"}/>
                            <Tag label={"Scala"}/>
                            <Tag label={"JS"}/>
                            <Tag label={"TypeScript"}/>
                            <Tag label={"Scala"}/>
                            <Tag label={"JS"}/>
                            <Tag label={"TypeScript"}/>
                            <Tag label={"Scala"}/>
                            <Tag label={"JS"}/>
                            <Tag label={"TypeScript"}/>
                            <Tag label={"Scala"}/>
                            <Tag label={"JS"}/>
                            <Tag label={"TypeScript"}/>
                            <Tag label={"Scala"}/>
                            <Tag label={"JS"}/>
                            <Tag label={"TypeScript"}/>
                        </div>
                    </div>
                </div>
                <div className="ossContainer">
                    <div className="contentContainer">
                        <div className="slogan">
                            Open source projects we author or contribute to
                        </div>

                        <div className="ossItem">oss</div>
                        <div className="ossItem">oss</div>
                        <div className="ossItem">oss</div>
                        <div className="ossItem">oss</div>

                        <div className="buttonContainer">
                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"View All OpenSource Projects"}
                                theme={ButtonTheme.Light}
                            />
                        </div>
                    </div>
                </div>

                <div className="videoContainer">
                    <div className="contentContainer">
                        <div className="slogan">
                            Our conference talks
                        </div>
                        <div className="videoItem"></div>
                        <div className="videoItem"></div>
                        <div className="videoItem"></div>
                        <div className="videoItem"></div>
                    </div>
                </div>

                <div className="ossContainer">
                    <div className="contentContainer">
                        <div className="slogan">
                            Journal
                        </div>

                        <div className="ossItem">oss</div>
                        <div className="ossItem">oss</div>

                        <div className="buttonContainer">
                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"All articles at or Medium"}
                                theme={ButtonTheme.Dark}
                            />
                        </div>
                    </div>
                </div>

                <div className="highlightContainer">
                    <div className="contentContainer">

                        <div className="highlightItem">
                            <div className="highlightNumber">
                                200
                            </div>
                            <div className="highlightTitle">
                                Developers
                            </div>
                        </div>

                        <div className="highlightItem">
                            <div className="highlightNumber">
                                6
                            </div>
                            <div className="highlightTitle">
                                Offices
                            </div>
                        </div>

                        <div className="highlightItem">
                            <div className="highlightNumber">
                                3
                            </div>
                            <div className="highlightTitle">
                                Departments
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mapContainer">
                    <div className="contentContainer">

                        <div className="slogan">
                            Offices
                        </div>

                        <div className="buttons">
                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />
                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />
                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />
                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />

                            <Button
                                onClick={() => window.open('https://github.com/evolution-gaming', '_blank')}
                                label={"Riga (Latvia)"}
                                theme={ButtonTheme.Light}
                            />
                        </div>
                    </div>
                </div>

                <div className="footerContainer">
                    <div className="contentContainer">
                        Come to us, we have cookie and cookie policy 😂
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
