import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import "./Form.css";
import { Link } from "react-router-dom";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";

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
        <p style={{ maxWidth: 400 }} className="App-intro">
          Sign Up to see latest events near you and follow places You like for
          their regular events
        </p>

        <IconButton
          to="/"
          className={classes.menuButton}
          color="contrast"
          aria-label="Menu"
        >
          <MenuIcon />
          <p style={{ color: "#808B96  " }} className="App-intro">
            Sign In With Facebook
          </p>
        </IconButton>
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
        <p style={{ color: "#808B96" }} className="App-intro">
          OR
        </p>

        <TextField
          style={{
            marginLeft: "1%",
            marginRight: "1%"
          }}
          required
          id="name"
          label="First Name"
          defaultValue=""
          className={classes.textField}
          onClick={(this.inputEntry = "")}
          margin="normal"
        />
        <TextField
          required
          id="required"
          label="Last Name"
          defaultValue=""
          className={classes.textField}
          onClick={(this.inputEntry = "")}
          margin="normal"
        />
        <TextField
          required
          id="required"
          label="User Name"
          defaultValue=""
          className={classes.textField}
          onClick={(this.inputEntry = "")}
          margin="normal"
        />
        <TextField
          required
          id="required"
          label="e mail"
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
        <TextField
          id="password"
          label="Repeat Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <Button raised color="primary" className={classes.button}>
          Sign Up
        </Button>
        <Link
          to="signin"
          className={classes.menuButton2}
          color="contrast"
          aria-label="Menu"
        >
          <p
            style={{ color: "#808B96", textAlign: "center" }}
            className="App-intro"
          >
            You alredy have an account? Sign in
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
