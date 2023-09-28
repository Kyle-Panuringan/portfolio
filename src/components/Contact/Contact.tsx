import {
  Box,
  Divider,
  Typography,
  TextField,
  Button,
  Stack,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef(null);
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleSendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    if (form.current !== null) {
      emailjs
        .sendForm(
          "service_0g55dty",
          "template_vufqooo",
          form.current,
          "H1sdfKiKpPw3YT-QM"
        )
        .then(
          () => {
            setOpen(true);
            setIsSuccess(true);
            target.reset();
          },
          () => {
            setOpen(true);
            setIsSuccess(false);
          }
        );
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        border: "4px solid darkred",
        bgcolor: "secondary.main",
      }}
    >
      <Stack direction="column">
        <Typography variant="h4" textAlign="center" py={2} color="primary.main">
          CONTACT ME
        </Typography>
        <Divider
          sx={{
            width: "90%",
            marginInline: "auto",
            borderColor: "primary.main",
          }}
        />
        <Stack
          onSubmit={handleSendForm}
          component="form"
          ref={form}
          sx={{
            height: "100%",
            marginTop: "20px",
            marginInline: "auto",
            alignItems: "center",
            flexDirection: "column",
            width: { xs: "90%", md: "50%" },
          }}
        >
          <TextField
            id="fullName"
            label="Full Name"
            name="fullName"
            fullWidth
            sx={{ m: { xs: 0.7, md: 1 } }}
            required
          />
          <TextField
            id="email"
            label="Email"
            name="email"
            fullWidth
            sx={{ m: { xs: 0.7, md: 1 } }}
            required
          />
          <TextField
            id="subject"
            label="Subject"
            name="subject"
            fullWidth
            sx={{ m: { xs: 0.7, md: 1 } }}
            required
          />
          <TextField
            id="message"
            name="message"
            label="Message"
            multiline
            rows={2}
            fullWidth
            sx={{ m: { xs: 0.7, md: 1 } }}
            required
          />
          <Button
            variant="contained"
            type="submit"
            sx={{
              color: "secondary.main",
              fontWeight: "bolder",
              m: { xs: 0.7, md: 1 },
            }}
            fullWidth
          >
            Send
          </Button>
          <Stack direction="column" textAlign="center">
            <Button
              href="mailto:kylepanuringan@gmail.com"
              sx={{
                fontStyle: "italic",
                textTransform: "lowercase",
                fontWeight: "bolder",
              }}
            >
              kylepanuringan@gmail.com
            </Button>
            <IconButton
              aria-label="linkedin"
              href="https://www.linkedin.com/in/kyle-panuringan/"
              target="_blank"
              sx={{
                color: "primary.main",
                "&:hover": { background: "transparent", color: "red" },
              }}
              disableRipple
            >
              <LinkedInIcon />
              <Typography variant="body2">Linkedin</Typography>
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        {isSuccess ? (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Email Sent Sucessfully!
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Email Sent Fail!
          </Alert>
        )}
      </Snackbar>
    </Box>
  );
};

export default Contact;
