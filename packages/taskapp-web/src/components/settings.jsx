import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

class Settings extends Component {
  handleChangeLanguage = (lng) => {
    const { i18n } = this.props;
    i18n.changeLanguage(lng);
  };

  render() {
    const { t } = this.props;
    return (
      <div>
        <br />
        <Typography variant="h5" style={{ fontFamily: "Vazirmatn" }}>
          {t("settings.interfaceLanguage")}
        </Typography>
        <br />
        <Stack
          // width={"50%"}
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <StyledButton
            variant="outlined"
            color="success"
            onClick={() => this.handleChangeLanguage("en")}
          >
            {t("settings.english")}
          </StyledButton>
          <StyledButton
            variant="outlined"
            color="success"
            onClick={() => this.handleChangeLanguage("fa")}
          >
            {t("settings.persian")}
          </StyledButton>
        </Stack>
      </div>
    );
  }
}

export default withTranslation()(Settings);

const StyledButton = styled(Button)({
  fontFamily: "Vazirmatn",
  width: "110px",
  marginBottom: "10px",
});
