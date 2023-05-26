import React from "react";
import { addBtn, subBtn } from "./action";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super();
    this.count = props.store.getState();
  }

  componentDidMount() {
    const { store } = this.props;
    const self = this;
    store.subscribe(() => {
      self.count = store.getState();
      this.forceUpdate();
    });
  }

  handleIncrease(count) {
    const { store } = this.props;
    console.log(count);
    store.dispatch(addBtn(count));
  }

  handleDecrease(count) {
    const { store } = this.props;
    console.log(count);
    store.dispatch(subBtn(count));
  }

  render() {
    return (
      <div className="App">
        <h1>Count: {this.count}</h1>
        <h2>
          <button onClick={() => this.handleIncrease(this.count)}>+</button>
          <button onClick={() => this.handleDecrease(this.count)}>-</button>
        </h2>
      </div>
    );
  }
}

export default App;
