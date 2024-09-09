import { Outlet } from "react-router-dom"
import GlobalStyle from "./styles/GlobalStyle"
import Header from "./components/Header"
import Footer from "./components/Footer"

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
