import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './Home.css';

function Home() {

    class Start extends React.Component {
        handleStart = () => {
            return  <Redirect  to="/Play" />
        };
    }
  
    return (

        <div>
            <div className="App">
                <header className="App-header">
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                </header>
            </div>

            <div>
            <Button
                onClick={this.handleStart()}
            >Start</Button>
            </div>
        </div>
    );
  }
  
  export default Home;
  