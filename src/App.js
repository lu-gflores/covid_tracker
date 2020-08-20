import React from 'react'
//instead of creating multiple imports, use the index.js to import components to App.js
import { Cards, Chart, CountryPicker} from './components'

import styles from './App.module.css'

class App extends React.Component {
    render() {
        return(
            <div>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}


export default App
