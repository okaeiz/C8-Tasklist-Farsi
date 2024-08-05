import React from "react";
import { withTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import { Box, Tabs, Drawer, IconButton, Divider, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import TaskIcon from "@mui/icons-material/Task";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import InfoIcon from "@mui/icons-material/Info";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled } from "@mui/system";

const drawerWidth = 240;

const Header = ({ t }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState("zero");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <header className="app-header">
      <Box sx={{ width: "100%" }} className="header-box">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="nav tabs example"
          role="navigation"
          variant="scrollable"
          scrollButtons={true}
        >
          <StyledTab
            value="zero"
            icon={<MenuIcon />}
            iconPosition="bottom"
            onClick={handleDrawerOpen}
          />
          <StyledTab
            value="one"
            icon={<TaskIcon />}
            iconPosition="start"
            component={Link}
            to="/tasks"
            sx={{ color: "pink[500]" }}
          />
          <StyledTab
            value="two"
            icon={<AccountTreeIcon />}
            iconPosition="start"
            component={Link}
            to="/processes"
          />
          <StyledTab
            value="three"
            icon={<InfoIcon />}
            iconPosition="bottom"
            component={Link}
            to="/info"
          />
          <StyledTab
            className="navbar-tab"
            value="four"
            icon={<SettingsIcon />}
            iconPosition="bottom"
            component={Link}
            to="/settings"
          />
          <Divider orientation="vertical" />
        </Tabs>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant="persistent"
          anchor="right"
          open={open}
        >
          <ArrowForwardIcon
            style={{ display: "flex", justifyContent: "flex-end" }}
            onClick={handleDrawerClose}
          />
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
        </Drawer>
      </Box>
    </header>
  );
};

const StyledTab = ({
  value,
  icon,
  iconPosition,
  component,
  to,
  sx,
  onClick,
  className,
}) => (
  <Tab
    value={value}
    icon={icon}
    iconPosition={iconPosition}
    component={component}
    to={to}
    sx={sx}
    onClick={onClick}
    className={className}
  />
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default withTranslation()(Header);
