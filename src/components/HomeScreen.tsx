import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import styles from "./HomeScreen.module.css";
import StatusButton from "./StatusButton";
import SimpleButton from "./SimpleButton";

type HomeListProps = {
  name: string;
};

const HomeList = ({ name }: HomeListProps) => {
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
            <StatusButton
              label="Turn on PC"
              statusUrl="/bootpc"
              executeUrl="/bootpc"
            />
          </div>
        </Grid>
        <Grid item>
          <div className={styles.buttonContainer}>
            <SimpleButton
              label="Turn on printer"
              onClick={() => {
                alert("vroom vroom");
              }}
            />
          </div>
        </Grid>
        <Grid item>
          <div className={styles.buttonContainer}>
            <SimpleButton
              label="Open OctoPi"
              onClick={() => {
                window.open("http://192.168.2.17/");
              }}
            />
          </div>
        </Grid>
        <Grid item>
          <div className={styles.buttonContainer}>
            <SimpleButton
              label="Simple Lists"
              onClick={() => {
                window.open("https://simple-lists.bilensky.ca/");
              }}
            />
          </div>
        </Grid>
        <Grid item>
          <div className={styles.buttonContainer}>
            <SimpleButton
              label="Resume Site"
              onClick={() => {
                window.open("https://mitch.bilensky.ca/");
              }}
            />
          </div>
        </Grid>
        <Grid item>
          <div className={styles.buttonContainer}>
            <SimpleButton
              label="CBC News"
              onClick={() => {
                window.open("https://www.cbc.ca/news");
              }}
            />
          </div>
        </Grid>
        <Grid item>
          <div className={styles.buttonContainer}>
            <SimpleButton
              label="Hacker News"
              onClick={() => {
                window.open("https://news.ycombinator.com/");
              }}
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeList;
