import React from "react";
import "./App.css";
import { TopBar } from "./TopBar/TopBar";

class App extends React.PureComponent {
    render() {
        return (
            <div className="App">
                <TopBar title={"Evolution Gaming Engineering"}/>
            </div>
        );
    }
}

export default App;
