import React from "react"
import GlobalStyles from "./styles/GlobalStyles"
import ChartGenerator from "./containers/ChartGenerator"
import { Header } from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {


  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<ChartGenerator />} />
          {/* <Route path="/ChartExamples" element={} /> */}
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </div>
  )
}

export default App


