import React from "react";
import "./App.css";
import { TopBar } from "./TopBar/TopBar";
import { BottomBar, BottomBarItems } from "./BottomBar/BottomBar";
import { Burger } from "./Burger/Burger";
import { HotDog } from "./HotDog/HotDog";

class App extends React.PureComponent {
    state = {
        activeItem: BottomBarItems.HotDog,
    };

    render() {
        const { activeItem } = this.state;
        return (
            <div className="App">
                <TopBar title={"HotDog Burger Taco"}/>
                <div className={"Content"}>
                    <div className={"BurgerContainer"}>
                        {activeItem === BottomBarItems.HotDog && (
                            <div className={"HotDogContainer"}>Just a visual unit test
                                <HotDog/>
                            </div>
                        )}
                        {activeItem === BottomBarItems.Burger && <Burger/>}
                        {activeItem === BottomBarItems.Taco && (
                            <div>Мексиканская шаурма (/ˈtɑːkoʊ/, UK also /ˈtækoʊ/, Spanish: [ˈtako]) is a traditional Mexican dish
                                consisting of a corn or wheat tortilla folded or rolled around a filling. A taco can be
                                made with a variety of fillings, including beef, pork, chicken, seafood, vegetables, and
                                cheese, allowing great versatility and variety. Tacos are generally eaten without
                                utensils, often garnished with salsa, chili pepper, avocado, guacamole, cilantro
                                (coriander), tomatoes, onions, and lettuce.
                            </div>
                        )}
                    </div>
                </div>
                <BottomBar onClick={this.onActiveItemChange} activeItem={activeItem}/>
            </div>
        );
    }

    private onActiveItemChange = (activeItem: BottomBarItems) => {
        this.setState({ activeItem });
    }
}

export default App;
