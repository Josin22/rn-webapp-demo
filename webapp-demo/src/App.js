import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {Index, Page2} from "./pages";
import Sockette from "sockette";


class App extends Component {

	connect = () => {
		let url = `your socket server ip`
		this.ws = new Sockette(url, {
			timeout: 2e3,
			maxAttempts: 10,
			onopen: e => console.log('Connected!', e),
			onmessage: e => console.log('onmessage!', e),
		});
	}

	close = () => {
		if (this.ws){
			this.ws.close()
		}
	}

  render() {
    return (
      <div className="App">
	      <BrowserRoutebase-api.jsr>
		      <div>
			      <Route path="/" exact component={Page2} />
			      <Route path="/index" component={Index} />
		      </div>
	      </BrowserRoutebase-api.jsr>
      </div>
    );
  }
}

const Protected = ({component: _comp, ...rest}) => {
    //判断条件 重定向指定路由
	let isLogin = true
	return <Route { ...rest} render = {props => isLogin ? < _comp /> : <Redirect to ="index"/>}/>
}

export default App;
