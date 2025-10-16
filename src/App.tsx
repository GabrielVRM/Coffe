import { ThemeProvider } from "styled-components";
import { Header } from "./components/Header";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { CoffeContextProvider } from "./context/CoffeeContext";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <GlobalStyle />
          <CoffeContextProvider>
            <Header />
            <Router />
          </CoffeContextProvider>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
