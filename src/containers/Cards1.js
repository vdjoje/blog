import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import FavoriteIcon from "material-ui-icons/Favorite";
import ShareIcon from "material-ui-icons/Share";
import { Link } from "react-router-dom";

const styles = {
  card: {
    margin: "5%",
    borderRadius: 10
    /*width: "40%",
    marginLeft: "1%",
    marginRight: "1%"*/
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
          backgroundSize: "cover",
          flex: 1,
          height: null,
          width: null
        }}
        className={classes.card}
      >
        <CardMedia className={classes.media} title="Contemplative Reptile">
          <div
            style={{
              textAlign: "center"
            }}
          >
            Naslov
          </div>
          <div>
            <p
              style={{
                margin: "2%",
                marginTop: "10%",
                textAlign: "justify"
              }}
            >
              Tek ste na pocetku upoznavanja sa GitHub-om. Pokusali ste da
              sacuvate svoj projekat ali bez uspeha. Ne ocajavajte. Ovde mozete
              nauciti brzo i lako.{" "}
            </p>
          </div>
        </CardMedia>
        <CardActions
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10
          }}
        >
          <IconButton style={{ float: "right" }} aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton style={{ float: "right" }} aria-label="Share">
            <ShareIcon />
          </IconButton>
          <Link
            to="/blog1"
            style={{
              color: "black",
              marginLeft: "20%"
            }}
          >
            <Button>Ulaz na Clanak</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleMediaCard);
