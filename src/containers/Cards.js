import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import FavoriteIcon from "material-ui-icons/Favorite";
import ShareIcon from "material-ui-icons/Share";

const styles = {
  card: {
    margin: "5%",
    borderRadius: 10,
    width: "60%",
    marginLeft: "20%",
    marginRight: "20%"
  },
  media: {
    height: 150
  }
};

function SimpleMediaCard(props) {
  const classes = props.classes;
  return (
    <div className="base">
      <Card
        style={{
          backgroundImage: "url('https://unsplash.it/200/300/?random')",
          backgroundSize: "cover",
          flex: 1,
          height: null,
          width: null
        }}
        className={classes.card}
      >
        <CardMedia
          className={classes.media}
          // image="https://unsplash.it/200/300/?random"
          title="Contemplative Reptile"
        />

        <CardActions
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10
          }}
        >
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMediaCard);
