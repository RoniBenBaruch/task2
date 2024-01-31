import { Component } from 'react'
import CCColors from './CCColors'
import CCForm from './CCForm'
import CCTable from './CCTable'


export default class CCMain extends Component {

    render() {
        return(<>
        <h2>Q1</h2>
        <CCColors></CCColors>
        <h2>Q2</h2>
        <CCForm></CCForm>
        <h2>Q3</h2>
        <CCTable></CCTable>
        </>
        )
     
    }
}

