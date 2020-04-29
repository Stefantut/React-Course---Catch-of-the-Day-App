import React from "react";
import { getFunName } from "../helpers";
class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = (event) => {
    // stop the form from submitting
    event.preventDefault();
    // get the text from that input
    console.log(this.myInput);
    // change the page to /store/what-was-entered
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
