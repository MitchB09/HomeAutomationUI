import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export default function HomeList(props: any) {
  const { name } = props;
  return (
    <>
      <Typography>{name}</Typography>
      <Grid container component={Paper} direction="column" justify="flex-start" alignItems="center">
        <Grid item>
          <Button>Option 1</Button>
        </Grid>
        <Grid item>
          <Button>Option 1</Button>
        </Grid>
      </Grid>
    </>
  );
}

HomeList.propTypes = {
  name: PropTypes.string.isRequired,
};
