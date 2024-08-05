import React, { Component, useState } from "react";
import {
  Container,
  Typography,
  Link,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";
import { withTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";

const Collapsible = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Card className="mb-3">
      <CardContent>
        <StyledAccordion>
          <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={handleToggle}
          >
            <StyledTypography>{title}</StyledTypography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <CardContent>{children}</CardContent>
          </StyledAccordionDetails>
        </StyledAccordion>
      </CardContent>
    </Card>
  );
};

class Info extends Component {
  state = {};
  render() {
    const { t } = this.props;
    return (
      <StyledContainer>
        <Card className="mb-3"></Card>
        <Card className="mb-3">
          <CardContent>
            <StyledTypography variant="h4">
              {t("info.information.title")}
            </StyledTypography>
            <br />
            <StyledTypography>
              {t("info.information.description")}
            </StyledTypography>
          </CardContent>
        </Card>
        <Collapsible title={t("info.documentation.title")}>
          <StyledTypography>
            {t("info.documentation.description")}
          </StyledTypography>
          <br />
          <StyledChip
            label={t("info.documentation.link")}
            component="a"
            href="https://docs.camunda.io/"
            variant="outlined"
            clickable
          />
        </Collapsible>
        <Collapsible title={t("info.academy.title")}>
          <StyledTypography>{t("info.academy.description")}</StyledTypography>
          <br />
          <StyledChip
            label={t("info.academy.link")}
            component="a"
            href="https://academy.camunda.com/"
            variant="outlined"
            clickable
          />
        </Collapsible>
        <Collapsible title={t("info.feedback.title")}>
          <StyledTypography>{t("info.feedback.description")}</StyledTypography>
          <br />
          <StyledChip
            label={t("info.feedback.link")}
            component="a"
            href="https://forum.camunda.com/"
            variant="outlined"
            clickable
          />
        </Collapsible>
        <Collapsible title={t("info.slack.title")}>
          <StyledTypography>{t("info.slack.description")}</StyledTypography>
          <StyledLink href="https://docs.expo.dev/versions/latest/sdk/font">
            Learn more
          </StyledLink>
        </Collapsible>
      </StyledContainer>
    );
  }
}

export default withTranslation()(Info);

const StyledTypography = styled(Typography)({
  fontFamily: "Vazirmatn",
  direction: "rtl",
});

const StyledAccordion = styled(Accordion)({
  fontFamily: "Vazirmatn",
  direction: "rtl",
});

const StyledAccordionSummary = styled(AccordionSummary)({
  fontFamily: "Vazirmatn",
  direction: "rtl",
});

const StyledAccordionDetails = styled(AccordionDetails)({
  fontFamily: "Vazirmatn",
  direction: "rtl",
});

const StyledLink = styled(Link)({
  fontFamily: "Vazirmatn",
  direction: "rtl",
});

const StyledContainer = styled(Container)({
  fontFamily: "Vazirmatn",
  direction: "rtl",
});

const StyledChip = styled(Chip)({
  fontFamily: "Vazirmatn",
  direction: "rtl",
});
