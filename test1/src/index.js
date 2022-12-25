import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"

function Hello() {

    // function on(){
    //     alert("u clicked button") onClick={on}
    // }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>hello world</h1>
            <button className="button" >heyy</button>
        </div>
    );
}

//ReactDOM.render(<Hello />, document.getElementById('root'))

 const root = ReactDOM.createRoot(document.getElementById('root'));

 root.render(
     <Hello/>
 )