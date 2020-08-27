import React from 'react'
import './App.css'
import './reset.css'

import Newspaper from './components/newspaper/Newspaper'
import NewspaperContainer from './components/newspaperContainer/NewspaperContainer'

function App() {
    return <div className="App">
        <Newspaper toggle={false} />
        <NewspaperContainer />
    </div>
}

export default App