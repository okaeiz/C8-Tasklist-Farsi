import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Typography, Container, Card, CardContent } from "@mui/material";
import { styled } from "@mui/material/styles";
import { gsap } from "gsap";
import { pink } from "@mui/material/colors";
import TaskList from "./taskList";

class Tasks extends Component {
  componentDidMount() {
    console.log("Tasks component mounted");

    // a bouncing ball animation
    gsap.to(".ball", {
      duration: 2,
      y: 150,
      repeat: -1,
      yoyo: true,
      ease: "bounce.out",
    });
  }

  render() {
    const { t } = this.props;
    return (
      <StyledContainer>
        <Card className="mb-3"></Card>
        <Card className="mb-3">
          <CardContent>
            <StyledTypography variant="h4">{t("tasks.title")}</StyledTypography>
            <br />
            <StyledTypography>{t("tasks.description")}</StyledTypography>
          </CardContent>
        </Card>
        {/* <Ball className="ball" />
        <Ball className="ball" />
        <Ball className="ball" /> */}
        <TaskList />
      </StyledContainer>
    );
  }
}

export default withTranslation()(Tasks);

const StyledContainer = styled(Container)({
  fontFamily: "Vazirmatn",
  direction: "rtl",
  textAlign: "center",
  padding: "20px",
});

const StyledTypography = styled(Typography)({
  fontFamily: "Vazirmatn",
  direction: "rtl",
});

const Ball = styled("div")({
  width: "50px",
  height: "50px",
  backgroundColor: pink[500],
  borderRadius: "50%",
  display: "inline-block",
  marginTop: "20px",
});
