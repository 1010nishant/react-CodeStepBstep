import React, { Component } from "react";
import ApiCall from "./ApiCall";
import ApiPost from "./ApiPost";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
// import ForwardRefParent from "./ForwardRefParent";
// import Student from './Student';
import Toggle from './Toggle';
// import Forms from './Forms';
// import ShouldUpdate from './ShouldUpdate';
// import Usestate from './Usestate';
// import Useeff from './Useeff'
// import Mapfunc from './Mapfunc';
import NestedList from './NestedList';
// import ReuseComp from './ReuseComp';
// import SendDataChild2Parent from './SendDataChild2Parent';
// import UseMemoParent from './UseMemoParent';
// import UseMemoChild from './UseMemoChild';
// import UserefClass from "./UserefClass";
// import UserefHook from "./UserefHook";
import HOC from "./HOC";
// import RoutersBasic from "./RoutersBasic";

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <Toggle/> */}
        {/* <Forms /> */}
        {/* <ShouldUpdate/> */}
        {/* <Usestate/> */}
        {/* <Useeff/> */}
        {/* <Mapfunc/> */}
        {/* <NestedList/> */}
        {/* <ReuseComp/> */}
        {/* <SendDataChild2Parent/> */}
        {/* <UseMemoParent/> */}
        {/* <UseMemoChild/> */}
        {/* <UserefClass /> */}
        {/* <UserefHook/> */}
        {/* <ForwardRefParent/> */}
        {/* <HOC/> */}
        {/* <RoutersBasic/> */}
        {/* <ApiCall/> */}
        {/* <ApiPost/> */}
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Toggle/>}/>
            <Route path="/hoc" element={<HOC/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
