import React from 'react'
import ReactDOM from 'react-dom'


function Hello() {
    return (
        <div>
            <h1>hello world</h1>
        </div>
    );
}

ReactDOM.render(<Hello />, document.getElementById('root'))

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//     <Hello/>
// )