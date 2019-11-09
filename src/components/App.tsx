import React from 'react';
import {connect} from "react-redux";
import './App.css';
import ConnectedTodos from "./todos/ConnectedTodos";
import ConnectedGoals from "./goals/ConnectedGoals";


type AppProps = {
    loading: number
}

class App extends React.Component<AppProps> {
  render () {
      return (
          this.props.loading
              ? <h1>Loading</h1>
              : <div>
                  <ConnectedTodos />
                  <ConnectedGoals />
              </div>
      );
  }
}
const mapStateToProps = (state) => ({loading: state.loading});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
