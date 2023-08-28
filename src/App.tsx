import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/AboutMe/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

const theme = createTheme({
  components: {
    MuiMenu: {
      styleOverrides: {
        paper: {
          background: "#000000",
          boxShadow: "0 0 7px red",
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#b00202",
      light: "#ff0000",
    },
    secondary: {
      main: "#000000",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
