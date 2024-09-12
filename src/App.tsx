import { Outlet } from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyle"
import Header from "./components/Header"
import Footer from "./components/Footer"
import '../node_modules/@flaticon/flaticon-uicons/css/all/all.css'

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Header />
      <div className="conteudo">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
