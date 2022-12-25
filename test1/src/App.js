import React from 'react'
import ChildCom from './ChildCom'
import Header from './Header';
import MyButton from "./MyButton"

const App = () => (
        <div>
            <ChildCom />
            <Header />
            <ChildCom />
            <Header />
            <MyButton  title={"abc"} cs={"n"}/>
        </div>
    );


export default App;