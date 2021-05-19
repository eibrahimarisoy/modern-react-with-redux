// import react and reactdom librarry
import React from 'react';
import ReactDOM from 'react-dom';

// create a react component

function App() {
    const buttonText = 123456;
    
    return (
        <div>
            <label htmlFor="name" className="label">Enter name</label>
            <input type="text" id="name" />
            <button type="submit" style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText}</button>

            
        </div>
    
    
        )
};


// take the react component and show it

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)

