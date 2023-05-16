import React from "react";
import styles from "./AppLabel.module.css";

class AppLabel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles["label"]}>
        <div className={styles["label-header"]}>
          <h2>CV Creator</h2>
          <div>
            <button
              className={styles["save"]}
              type="button"
              onClick={this.props.printDocument}
            >
              <img
                src={require("../../icons/save.png")}
                className={styles["download"]}
                alt="Download"
              ></img>
              <span className={styles["buttonText"]}>Save</span>
            </button>
            <button
              className={styles["autofill"]}
              type="button"
              onClick={this.props.autoFill}
            >
              <img
                src={require("../../icons/autofill.png")}
                className={styles["icon"]}
                alt="Autofill"
              ></img>
              <span className={styles["buttonText"]}>Autofill</span>
            </button>
          </div>
        </div>
        <div className={styles["credit"]}>
          <h3>An application by</h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/bogdanblare"
          >
            <button className={styles["github"]} type="button">
              <img
                src={require("../../icons/github.png")}
                className={styles["icon"]}
                alt="Link to GitHub"
              ></img>
              bogdanblare
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default AppLabel;
