import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import todoTasks from "../../assets/projects/todoTasks.png";
import countries from "../../assets/projects/projectCountries.png";
import grandPiano from "../../assets/projects/grandPiano.png";
import shop from "../../assets/projects/shop.png";
import SA from "../../assets/sass.svg";
import JS from "../../assets/javascript.svg";
import TS from "../../assets/typescript.svg";
import MU from "../../assets/mui.svg";

const projects = [
  {
    img: todoTasks,
    title: "TODO TASKS",
    details:
      "Todo Tasks is a task management that help you to create, add, edit, and delete task. Use LocalStorage to store task data.",
    tools: [
      { logo: JS, title: "JavaScript" },
      { logo: TS, title: "TypeScript" },
      { logo: SA, title: "Sass" },
    ],
    urlSrc: "https://github.com/Kyle-Panuringan/todo-tasks",
    urlDemo: "https://kyle-panuringan.github.io/todo-tasks/",
  },
  {
    img: countries,
    title: "COUNTRY DATABASE",
    details:
      'Country Database is a database of information about countries around the world. Use Rest Countries\'s API from "restcountries.com"',
    tools: [
      { logo: JS, title: "JavaScript" },
      { logo: TS, title: "TypeScript" },
      { logo: SA, title: "Sass" },
    ],
    urlSrc: "https://github.com/Kyle-Panuringan/countries",
    urlDemo: "https://kyle-panuringan.github.io/countries/",
  },
  {
    img: grandPiano,
    title: "GRAND PIANO",
    details:
      "Grand Piano is a sample landing page about learning how to play piano and becoming a pianist.",
    tools: [
      { logo: JS, title: "JavaScript" },
      { logo: TS, title: "TypeScript" },
      { logo: MU, title: "MUI" },
    ],
    urlSrc: "https://github.com/Kyle-Panuringan/grand-piano",
    urlDemo: "https://kyle-panuringan.github.io/grand-piano/",
  },
  {
    img: shop,
    title: "SHOP",
    details:
      'Shop is a simple e-commerce website wherein you can filter out and search the available products on the page. Use api from "fakestoreapi.com" for product data.',
    tools: [
      { logo: JS, title: "JavaScript" },
      { logo: TS, title: "TypeScript" },
      { logo: MU, title: "MUI" },
    ],
    urlSrc: "https://github.com/Kyle-Panuringan/shop",
    urlDemo: "https://kyle-panuringan.github.io/shop/",
  },
];

const Projects = () => {
  return (
    <Box sx={{ bgcolor: "secondary.main" }}>
      <Typography
        id="personalprojects"
        variant="h4"
        sx={{
          bgcolor: "primary.main",
          textAlign: "center",
          fontWeight: "bolder",
          py: 2,
        }}
      >
        PERSONAL PROJECTS
      </Typography>
      <Box
        sx={{
          bgcolor: "secondary.main",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(265px, 1fr))",
          py: 7,
          px: { xs: "20px", md: "77px" },
          gap: 2,
        }}
      >
        {projects.map((project, i) => {
          return (
            <Card
              key={i}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: "0 0 10px red",
              }}
            >
              <CardMedia
                component="img"
                image={project.img}
                sx={{ flexGrow: 0 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" textAlign="center" fontWeight="bolder">
                  {project.title}
                </Typography>
                <Stack
                  direction="row"
                  sx={{
                    height: "30px",
                    justifyContent: "center",
                    marginTop: "5px",
                    marginBottom: "10px",
                  }}
                >
                  {project.tools.map(({ logo, title }, i) => (
                    <Box
                      key={i}
                      component="img"
                      src={logo}
                      sx={{ mx: "4px", borderRadius: "5px" }}
                      title={title}
                    />
                  ))}
                </Stack>
                <Typography
                  variant="body1"
                  textAlign="justify"
                  sx={{ wordSpacing: "-2px" }}
                >
                  {project.details}
                </Typography>
              </CardContent>
              <CardActions sx={{ width: "100%", flexGrow: 0 }}>
                <Button
                  variant="contained"
                  sx={{ width: "100%", mx: "2px" }}
                  href={project.urlSrc}
                  target="_blank"
                >
                  View Code
                </Button>
                <Button
                  variant="contained"
                  sx={{ width: "100%", mx: "2px" }}
                  href={project.urlDemo}
                  target="_blank"
                >
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default Projects;
