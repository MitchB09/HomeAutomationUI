import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import styles from "./SimpleButton.module.css";

export default function SimpleButton(props: any) {
  const { label, disabled, onClick } = props;

  return (
    <Button
      variant="contained"
      color="primary"
      className={styles.button}
      onClick={onClick}
			size="large"
			disabled={disabled}
    >
      { label }
    </Button>
  );
}

SimpleButton.propTypes = {
  label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	disabled: PropTypes.bool,
};
