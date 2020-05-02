import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
class App extends React.Component {
  // use a property to create state
  state = {
    fishes: {},
    order: {},
  };

  addFish = (fish) => {
    // to update the state use the existing setState Api
    // 1. take a copy of the existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object
    this.setState({ fishes });
  };
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}
export default App;
