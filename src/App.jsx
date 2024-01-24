import { useState } from 'react'
import './App.css'
import CCColors from './Class Components/CCColors'
import CCForm from './Class Components/CCForm'
import CCTable from './Class Components/CCTable'

function App() {

  return (
    <>
      <p>Q1
        <CCColors></CCColors></p>
      <p>Q2
        <CCForm></CCForm></p>
      <p>Q3
        <CCTable></CCTable></p>
    </>
  )
}

export default App
