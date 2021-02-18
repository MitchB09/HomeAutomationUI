import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styles from "./HomeScreen.module.css";

export default function HomeList(props: any) {
  const [pcStatus, setPCStatus] = useState<boolean>(false);

  useEffect(() => {
    checkBootPCStatus()
    return function cleanup() {
			//Specify how to clean up after this effect:
    }
  });
  // Make a request for a user with a given ID
  const checkBootPCStatus = () => {
    axios
      .get("/bootpc")
      .then(function (response) {
        setPCStatus(true);
      })
      .catch(function (error) {
        // trigger polling/show error
        console.log(error);
      })
  };

  const bootPC = () => {
    console.log("Called bootpc");
    axios
      .post("/bootpc")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  return (
    <>
      <Grid
        container
        component={Paper}
        direction="column"
        justify="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        <Grid item>
          <div className={styles.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              className={styles.button}
              onClick={bootPC}
              disabled={!pcStatus}
            >
              Turn on PC
            </Button>
          </div>
        </Grid>
        <Grid item>
          <div className={styles.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              className={styles.button}
            >
              Turn on printer
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

HomeList.propTypes = {
  name: PropTypes.string.isRequired,
};
