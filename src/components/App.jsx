import React from 'react';

// export default function App(props) {
//   return (
//     <div className="App">
//         <h1>{props.title}</h1>
//     </div>
//   );
// }


export default class App extends React.Component {
  state = {
    title: 'This is the current state.',
    placeholder: 'Please enter text here',
    hasLoaded: false,
  }

  handleEvent(params) {
    let data = params.target.value
    this.data = data;
    this.forceUpdate();
  }

  handleClick(params) {
    if (this.state.hasLoaded === true) {
      this.setState((state, props) => {
        return {hasLoaded: false};
      });
    } else if (this.state.hasLoaded === false) {
      this.setState((state, props) => {
        return {hasLoaded: true};
      });
    }
    
    this.forceUpdate();
  }

 
  render() {
    if (this.state.hasLoaded === true) {
      return (
        <div>
          <h1>My First React Project</h1>
          <hr />
          <h3>{this.state.title}</h3>
          <h3>{this.props.title}</h3>
          <h2>{this.data}</h2>
          <hr />
          <input name="myData" type="text" placeholder={this.state.placeholder} onChange={(params) => this.handleEvent(params)} />
          <button onClick={(params) => this.handleClick(params)} >Click me</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Loading....</h1>
          <button onClick={(params) => this.handleClick(params)} >Click me</button>
        </div>
      )

    }
  }
}
