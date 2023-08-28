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
import SA from "../../assets/sass.svg";
import JS from "../../assets/javascript.svg";
import TS from "../../assets/typescript.svg";

const projects = [
  {
    img: todoTasks,
    title: "TODO TASKS",
    details:
      "Todo Tasks is a task management that help you to create, add, edit, and delete task. Use LocalStorage to store task data.",
    tools: [SA, JS, TS],
    urlSrc: "https://github.com/Kyle-Panuringan/todo-tasks",
    urlDemo: "https://kyle-panuringan.github.io/todo-tasks/",
  },
  {
    img: countries,
    title: "COUNTRY DATABASE",
    details:
      'Country Database is a database of information about countries around the world. Use Rest Countries\'s API from "restcountries.com"',
    tools: [SA, JS, TS],
    urlSrc: "https://github.com/Kyle-Panuringan/countries",
    urlDemo: "https://kyle-panuringan.github.io/countries/",
  },
];

const Projects = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "secondary.main" }}>
      <Typography
        id="projects"
        variant="h4"
        sx={{
          bgcolor: "primary.main",
          textAlign: "center",
          fontWeight: "bolder",
          py: 2,
        }}
      >
        PROJECTS
      </Typography>
      <Box
        sx={{
          bgcolor: "secondary.main",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(265px, 1fr))",
          py: "20px",
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
                  {project.tools.map((tool, i) => (
                    <Box
                      key={i}
                      component="img"
                      src={tool}
                      sx={{ mx: "4px", borderRadius: "5px" }}
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
