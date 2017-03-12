import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {title: "Business Website",
         category: "Web design"
        },
        {title: "Social App",
         category: "Mobile dev"
        },
        {title: "Shopping cart",
         category: "Web dev"
        }
      ]
    }
  }
  
  render() {
    
    return (
      <div className="App">
    
         
          <h2>Pizza rocks</h2>
          <Projects projects={this.state.projects}/>
          
      </div>
    );
  }
}

export default App;
