import dayjs from "dayjs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AccessTime from "@mui/icons-material/AccessTime";
import CalendarToday from "@mui/icons-material/CalendarToday";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Header from "../../components/Header";
import InputField from "../../components/InputField";
import SearchTool from "../../components/SearchTool/SearchTool";
import "../reset.scss";
import "./home.scss";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 1024,
      lg: 1170,
    },
  },
});

const Home = () => {
  const today = dayjs();
  const defaultPickupDate = today.format("ddd D MMM");
  const defaultDropoffDate = today.add(3, "day").format("ddd D MMM");

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className="hero">
        <Container maxWidth="lg">
          <h1 className="hero__title">Car Hire – Search, Compare &amp; Save</h1>
          <div className="search">
            <FormGroup className="location-checkbox">
              <FormControlLabel control={<Checkbox />} label="Drop car off at different location" />
            </FormGroup>
            <div className="search-container">
              <Grid container spacing={1}>
                <Grid item xs={12} md={5}>
                  <SearchTool />
                </Grid>
                <Grid container spacing={1} item xs={12} md={3}>
                  <Grid item xs={7} sm={9} md={7}>
                    <InputField
                      label="Pick-up Date"
                      icon={<CalendarToday />}
                      inputProps={{ defaultValue: defaultPickupDate }}
                    />
                  </Grid>
                  <Grid item xs={5} sm={3} md={5}>
                    <InputField
                      label="Time"
                      icon={<AccessTime />}
                      inputProps={{ defaultValue: "10:00" }}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1} item xs={12} md={3}>
                  <Grid item xs={7} sm={9} md={7}>
                    <InputField
                      label="Drop-off Date"
                      icon={<CalendarToday />}
                      inputProps={{ defaultValue: defaultDropoffDate }}
                    />
                  </Grid>
                  <Grid item xs={5} sm={3} md={5}>
                    <InputField
                      label="Time"
                      icon={<AccessTime />}
                      inputProps={{ defaultValue: "10:00" }}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} md={1}>
                  <Button
                    className="search-btn"
                    variant="contained"
                    color="success"
                    disableElevation
                    fullWidth
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Home;
