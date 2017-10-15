import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import "./Form.css";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import { Link } from "react-router-dom";
import Typography from "material-ui/Typography";

const stil = {
  display: "flex",
  flexDirection: "column"
};

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500
  },

  button: {
    margin: theme.spacing.unit,
    width: 200
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: "blue",
    margin: theme.spacing.unit,
    width: 500
  },

  menuButton2: {
    marginLeft: -12,
    marginRight: 20,
    color: "green",
    margin: theme.spacing.unit,
    width: 500
  }
});

class TextFields extends React.Component {
  state = {
    name: "",
    age: "",
    multiline: "Controlled",
    required: "valid email address"
  };

  handleChangeMultiline = event => {
    this.setState({
      multiline: event.target.value
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form
        style={{
          marginTop: "2%",
          marginBottom: "20%",
          zIndex: 10,
          backgroundColor: "#EBEDEF",
          width: "80%",
          marginLeft: "10%",
          marginRight: "10%",
          borderRadius: 10,
          alignItems: "center"
        }}
        className="forma"
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="required"
          label="User Name or Email"
          defaultValue=""
          className={classes.textField}
          onClick={(this.inputEntry = "")}
          margin="normal"
        />

        <TextField
          id="password"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />

        <Button raised color="primary" className={classes.button}>
          Sign In
        </Button>

        <p style={{ color: "#808B96  " }} className="App-intro">
          OR
        </p>
        <Link to="/">
          <IconButton
            className={classes.menuButton}
            color="contrast"
            aria-label="Menu"
          >
            <MenuIcon />
            <p style={{ color: "#808B96  " }} className="App-intro">
              Sign In With Facebook
            </p>
          </IconButton>
        </Link>
        <IconButton
          className={classes.menuButton2}
          color="contrast"
          aria-label="Menu"
        >
          <MenuIcon />
          <p style={{ color: "#808B96  " }} className="App-intro">
            Sign In With Google
          </p>
        </IconButton>
        <br />
        <Link to="#">
          <Typography color="inherit">Forgot password?</Typography>
        </Link>
        <Link
          to="signup"
          className={classes.menuButton2}
          color="contrast"
          aria-label="Menu"
        >
          <p style={{ color: "#808B96  " }} className="App-intro">
            You do not have an account? Sign up
          </p>
        </Link>
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
