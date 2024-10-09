import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Membros } from "./pages/Membros"
import {Funcionamento} from "./pages/Funcionamento"
import {Referencia} from "./pages/Referencia"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme.js"
import { GlobalStyle } from "./styles/global.js"
import { Header } from "./pages/Header.jsx"
import { Tecnologia } from "./pages/Tecnologia.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/membros",
    element: <Membros />,
  },
  {
    path: "/funcionamento",
    element: <Funcionamento />,
  },
  {
    path: "/header",
    element: <Header />,
  },
  {
    path: "/tecnologia",
    element: <Tecnologia />,
  },
  {
    path: "/referencia",
    element: <Referencia />,
  },
])

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}
