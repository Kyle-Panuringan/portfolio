import { Box, Divider, Stack, Typography, styled } from "@mui/material";
import HTML from "../../assets/html.svg";
import CSS from "../../assets/css.svg";
import SA from "../../assets/sass.svg";
import JS from "../../assets/javascript.svg";
import TS from "../../assets/typescript.svg";
import JV from "../../assets/java.svg";
import RT from "../../assets/react.svg";
import GI from "../../assets/git.svg";

const ImgTechStack = styled("img")({
  minWidth: "50px",
  widht: "100%",
});

const About = () => {
  return (
    <Box id="aboutme" sx={{ bgcolor: "secondary.main", height: "100vh" }}>
      <Divider
        sx={{
          width: "90%",
          marginInline: "auto",
          borderColor: "primary.main",
        }}
      />
      <Stack
        textAlign="center"
        sx={{ height: "100%", justifyContent: "center", px: { xs: 2, md: 20 } }}
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
          Hello, my name is Kyle Panuringan, a BSIT graduate from STI College
          Las Piñas. In the tech industry, I am more familiar in front-end
          development. As a recent graduate, I am eager and willing to learn new
          more things to become a highly skilled professional.
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
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          width="100%"
          flexWrap="wrap"
          gap={2}
        >
          <ImgTechStack
            sx={{ height: { xs: "50px", md: "100px" } }}
            src={HTML}
          />
          <ImgTechStack
            sx={{ height: { xs: "50px", md: "100px" } }}
            src={CSS}
          />
          <ImgTechStack sx={{ height: { xs: "50px", md: "100px" } }} src={SA} />
          <ImgTechStack sx={{ height: { xs: "50px", md: "100px" } }} src={JS} />
          <ImgTechStack sx={{ height: { xs: "50px", md: "100px" } }} src={TS} />
          <ImgTechStack sx={{ height: { xs: "50px", md: "100px" } }} src={JV} />
          <ImgTechStack sx={{ height: { xs: "50px", md: "100px" } }} src={RT} />
          <ImgTechStack sx={{ height: { xs: "50px", md: "100px" } }} src={GI} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default About;
