import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";

const styles = theme => ({});

const ablog = {
  margin: "5%",
  backgroundColor: "#FFF",
  borderRadius: 10
};

const paragraf = {
  margin: "2%",
  textAlign: "justify"
};

const code = {
  marginLeft: "10%",
  marginRight: "10%",
  fontFamily: "Monospace",
  fontSize: "18px",
  backgroundColor: "black",
  color: "white"
};

const codecomm = {
  marginLeft: "10%",
  marginRight: "10%",
  fontFamily: "Monospace",
  fontSize: "18px",
  backgroundColor: "black",
  color: "gray"
};

class TextFields extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div style={ablog}>
        <p
          style={{
            textAlign: "center"
          }}
        >
          Kako uplodovati projekat na GitHub
        </p>
        <div style={paragraf}>
          1. Pre svega napravite novi projekat (Repository) na GitHub-u. Da
          biste izbegli greske, nemojte da cekirate opciju koja vam pravi README
          i gitignore fajlove automatski. Ove fajlove mozete dodati posle
          snimanja Vasih fajlova na GitHub.
        </div>
        <div style={paragraf}>
          2. Otvorite Terminal. To mozete uraditi pomocu precite na tastaturi
          CTR + ALT + T.
        </div>
        <div style={paragraf}>
          3. Promenite radni direktorijum na lokalni foder gde Vam se nalazi
          zeljeni projekat.
        </div>
        <div style={paragraf}>
          <p>
            4. Unosom sledece komande u terminal formatirate lokalni
            direktorijum kao Git projekat (Git Repository)
          </p>
          <div style={code}>$ git init</div>
        </div>
        <div style={paragraf}>
          <p>
            5. Ako su Vam svi fajlovi spremni u lokalnom direktorijumu sledecom
            komandom ih pripremate za prvo cuvanje (commit):
          </p>
          <div style={code}>$ git add .</div>
          <div style={codecomm}>
            # Dodajete fajlove u lokalni projekat i pripremate ih za cuvanje.
            Ako zelite da sprecite pripremu odredjenog fajla koristite komandu
            'git reset HEAD YOUR-FILE'.
          </div>
        </div>
        <div style={paragraf}>
          <p>
            6. Fajlove koje ste pripremili cuvate (Commit) sledecom komandom:
          </p>
          <div style={code}>$ git commit -m "First commit"</div>
          <div style={codecomm}>
            # Kada ste sacuvali sve promene sada pripremate fajlove da budu
            snimljeni na server GitHub-a. Da prekinete ovaj korak i vratite se
            na pripremu fajlova kositite komadnu 'git reset --soft HEAD~1' posle
            cega mozete ponovo comitovati i dodavati fajlove.
          </div>
        </div>
        <div style={paragraf}>
          <p>
            7. Kopirajte URL Vaseg projekta sa pocetka Vaseg GitHub Quck Setup
            page-a
          </p>
        </div>
        <div style={paragraf}>
          <p>
            8. U terminal dodajte URL Vaseg projekta na GitHub-u, gde ce Vas
            lokalni projekat biti sacuvan.
          </p>
          <div style={code}>
            $ git remote add origin 'remote repository URL'
          </div>
          <div style={codecomm}># Setuje novi pristup</div>
          <div style={code}>$ git remote -v</div>
          <div style={codecomm}># Verifikuje Vas URL</div>
        </div>
        <div style={paragraf}>
          <p>
            9. Finilizirate (Push) promene Vaseg projekta na GitHub-u sledecom
            komandom:
          </p>
          <div style={code}>$ git push origin master</div>
          <div style={codecomm}>
            # Zavrsavate cuvanje Vasig fajlova na GitHub-u. Posle ovog koraka
            vasi falovi su bezbedno sacuvani na serveru i spremni za dalje
            kopiranje (clone).
          </div>
        </div>
        <Link
          to="/"
          style={{
            color: "black",
            marginLeft: "20%"
          }}
        >
          <Button>Povratak na start</Button>
        </Link>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
