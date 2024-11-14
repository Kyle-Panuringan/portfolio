import { Box, Typography, Button, IconButton, styled } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import hero from "../../assets/hero.jpg";
import heroMobile from "../../assets/heroMobile.jpg";
import RM from "../../assets/resume/CV_Kyle_Panuringan_2024.pdf";

const BoxContainer = styled(Box)({
  position: "relative",
  height: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
});
const BoxHero = styled(Box)({
  position: "absolute",
  top: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  width: "100%",
});

const Hero = () => {
  return (
    <BoxContainer
      sx={{
        backgroundImage: {
          xs: `url(${heroMobile})`,
          md: `url(${hero})`,
        },
      }}
    >
      <BoxHero sx={{ left: { xs: "50%", md: "35%" } }}>
        <Typography sx={{ typography: { md: "h4" }, fontStyle: "italic" }}>
          HELLO, MY NAME IS
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "primary.main",
            fontWeight: "bolder",
            typography: { xs: "h5", md: "h3" },
          }}
        >
          KYLE PANURINGAN
        </Typography>
        <Typography
          sx={{
            typography: { md: "h4" },
            fontWeight: "bolder",
            fontStyle: "italic",
          }}
        >
          &#60;BSIT Graduate/&#62;
        </Typography>
        <Box>
          <IconButton
            aria-label="email"
            href="mailto:kylepanuringan@gmail.com"
            target="_blank"
          >
            <EmailIcon
              sx={{
                color: "primary.main",
                "&:hover": { background: "transparent", color: "red" },
              }}
            />
          </IconButton>
          <IconButton
            aria-label="github"
            href="https://github.com/Kyle-Panuringan"
            target="_blank"
          >
            <GitHubIcon
              sx={{
                color: "primary.main",
                "&:hover": { background: "transparent", color: "red" },
              }}
            />
          </IconButton>
          <IconButton
            aria-label="linkedin"
            href="https://www.linkedin.com/in/kyle-panuringan/"
            target="_blank"
          >
            <LinkedInIcon
              sx={{
                color: "primary.main",
                "&:hover": { background: "transparent", color: "red" },
              }}
            />
          </IconButton>
        </Box>
        <Button
          size="large"
          sx={{
            border: 2,
            fontWeight: "bolder",
            borderColor: "primary.main",
            color: "primary.main",
            background: "rgba(0,0,0,0.8)",
            boxShadow: "0 0 7px red",
            "&:hover": { color: "red" },
          }}
          href={RM}
          target="_blank"
        >
          Download Resume
        </Button>
      </BoxHero>
    </BoxContainer>
  );
};

export default Hero;
