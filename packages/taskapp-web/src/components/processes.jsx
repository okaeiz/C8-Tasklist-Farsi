import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Typography, Container, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProcessList from "./processList";

class Processes extends Component {
  render() {
    const { t } = this.props;
    return (
      <StyledContainer fixed>
        <Stack>
          <StyledTypography variant="h4">
            {t("processes.title")}
          </StyledTypography>
          <br />
          <StyledTypography>{t("processes.description")}</StyledTypography>
        </Stack>

        <ProcessList />
      </StyledContainer>
    );
  }
}

export default withTranslation()(Processes);

const StyledContainer = styled(Container)({
  fontFamily: "Vazirmatn",
  direction: "rtl",
  width: "100%",
});

const StyledTypography = styled(Typography)({
  marginTop: 30,
  fontFamily: "Vazirmatn",
  direction: "rtl",
});
