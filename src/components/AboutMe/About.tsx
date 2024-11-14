import { Box, Divider, Stack, Typography } from "@mui/material";
import iHtml from "../../assets/html.svg";
import iCss from "../../assets/css.svg";
import iSass from "../../assets/sass.svg";
import iJavaScript from "../../assets/javascript.svg";
import iTypeScript from "../../assets/typescript.svg";
import iPHP from "../../assets/PHP.svg";
import iJava from "../../assets/java.svg";
import iMySql from "../../assets/mysql.svg";
import iReact from "../../assets/react.svg";
import iGit from "../../assets/git.svg";
import iMui from "../../assets/mui.svg";

const techStack = [
  { name: "HTML", img: iHtml },
  { name: "CSS", img: iCss },
  { name: "Sass", img: iSass },
  { name: "JavaScript", img: iJavaScript },
  { name: "TypeScript", img: iTypeScript },
  { name: "PHP", img: iPHP },
  { name: "Java", img: iJava },
  { name: "MySql", img: iMySql },
  { name: "React", img: iReact },
  { name: "Git", img: iGit },
  { name: "Material UI", img: iMui },
];

const About = () => {
  return (
    <Box id="aboutme" sx={{ bgcolor: "secondary.main" }}>
      <Divider
        sx={{
          width: "90%",
          marginInline: "auto",
          borderColor: "primary.main",
        }}
      />
      <Stack
        textAlign="center"
        sx={{
          height: "100%",
          justifyContent: "center",
          px: { xs: 2, md: 20 },
          py: 7,
        }}
      >
        <Typography
          paddingY={2}
          textAlign="center"
          sx={{ color: "primary.main", typography: { xs: "h5", md: "h3" } }}
        >
          ABOUT ME
        </Typography>
        <Typography
          variant="body1"
          fontSize={30}
          sx={{
            typography: { xs: "body1", md: "h5" },
            textAlign: "justify",
            marginInline: "auto",
          }}
        >
          Graduated with a Bachelor of Science in Information Technology from
          STI College Las Piñas City, seeking an entry-level position in
          Information Technology to learn more and further enhance my skills
          within the tech industry.
        </Typography>
        <Typography
          variant="h3"
          paddingY={2}
          textAlign="center"
          sx={{
            color: "primary.main",
            typography: { xs: "h5", md: "h3" },
          }}
        >
          TECH STACK
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(auto-fit, minmax(100px, 1fr))",
              md: "repeat(auto-fit, minmax(150px, 1fr))",
            },
          }}
          gap={1}
        >
          {techStack.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{ border: "2px solid darkred", borderRadius: 2, py: 2 }}
              >
                <Box
                  component="img"
                  src={item.img}
                  width="70px"
                  height="70px"
                />
                <Typography variant="h6">{item.name}</Typography>
              </Box>
            );
          })}
        </Box>
      </Stack>
    </Box>
  );
};

export default About;
