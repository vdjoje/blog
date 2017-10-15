import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    // marginTop: theme.spacing.unit * 3,
    width: "100%",
    position: "fixed",
    top: "0",
    zIndex: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  boja1: {
    backgroundColor: "#00120B",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: ""
  },
  boja2: {
    color: "#D5A021"
  }
});

function ButtonAppBar(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.boja1}>
          <IconButton
            className={classes.boja2}
            color="contrast"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Typography type="title" color="inherit" className={classes.boja2}>
              Title
            </Typography>
          </Link>
          <Link to="/signin">
            <Button className={classes.boja2} color="contrast">
              Login
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
