import React from 'react'
//instead of creating multiple imports, use the index.js to import components to App.js
import { Cards, Chart, CountryPicker } from './components'
import { fetchData } from './api/'
import styles from './App.module.css'

class App extends React.Component {
    state ={
        data: {}
    }

    async componentDidMount() {
        const fetchedData = await fetchData()
        this.setState({data: fetchedData})
    }

    render() {
        const {data} =  this.state

        return (
            <div className={styles.container}>
                <Cards data={data}  />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}


export default App
