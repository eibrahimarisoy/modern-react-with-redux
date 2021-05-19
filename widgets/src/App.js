import React, { useState } from 'react';
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'


const items = [
    {
        title: 'What is React',
        content: 'is a frontend javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library amonf enggineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use react by creating components'
    }
]


const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'The color blue',
        value: 'blue'
    }
]



const App = () => {
const [selected, setSelected] = useState(options[0])

    return (
        <div>
            <Header />
            <Route path='/' >
                <Accordion items={items} />
            </Route>
            <Route path='/list' >
                <Search />
            </Route>
            <Route path='/dropdown' >
                <Dropdown
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
            <Route path='/translate' >
                <Translate />
            </Route>
        </div>
    )
}

export default App;


// const showAccordion = () => {
//     if (window.location.pathname === '/accordion') {
//             return <Accordion items={items} />
//         }
// }

// const showList = () => {
//     if (window.location.pathname === '/list') {
//             return <Search />
//         }
// }

// const showDropdown = () => {
//     if (window.location.pathname === '/dropdown') {
//             return <Accordion />
//         }
// }

// const showTranslate = () => {
//     if (window.location.pathname === '/translate') {
//             return <Translate />
//         }
// }


// const showComponent = (route, component) => {
//     return window.location.pathname === route
//         ? component
//         : null;
// }