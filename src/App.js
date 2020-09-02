import React, {Component} from 'react';
import './App.css'
import Validation from "./Validation";
import Char from "./Char";

class App extends Component {
    state = {
        userState : 'Surya'
    }

    handleOnChange = (e) => {
        this.setState({userState: e.target.value})
    }

    deleteCharHanlder = (index) => {
        const input = this.state.userState.split('');
        input.splice(index, 1);
        const updatedInput = input.join('');
        this.setState({userState:updatedInput})
    }

    render () {
        const charList = this.state.userState.split('').map((c, index) => {
            return <Char key={index} character={c} clicked={() => this.deleteCharHanlder(index)}/>
        });

        return (
          <div className="App">
              <input type="text" onChange={this.handleOnChange} value={this.state.userState}/>
              <p>{this.state.userState}</p>
              <Validation textLength={this.state.userState.length}/>
              {charList}
          </div>
      );
    }

}

export default App;
