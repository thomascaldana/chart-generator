import React from "react"
import GlobalStyles from "./styles/GlobalStyles"
import ChartGenerator from "./containers/ChartGenerator"
import { Header } from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ChartExamples from "./components/ChartExamples"
import Footer from "./components/Footer"

function App () {


  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<ChartGenerator />} />
          <Route path="/ChartExamples" element={<ChartExamples />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <GlobalStyles />
    </div>
  )
}

export default App


