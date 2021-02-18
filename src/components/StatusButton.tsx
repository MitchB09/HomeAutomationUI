import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import SimpleButton from "./SimpleButton";

export default function StatusButton(props: any) {
  const { label, statusUrl, executeUrl } = props;
  const [status, setStatus] = useState<boolean>(true);

  useEffect(() => {
    checkStatus();
    return function cleanup() {
      //Specify how to clean up after this effect:
    };
  });
  // Make a request for a user with a given ID
  const checkStatus = () => {
    axios
      .get("/" + statusUrl)
      .then(() => {
        setStatus(true);
      })
      .catch(function (error) {
        // trigger polling/show error
        console.log(error);
      });
  };

  const execute = () => {
    axios
      .post("/" + executeUrl)
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
    <SimpleButton
			label={label}
			onClick={execute}
			disabled={!status}
    />
  );
}

StatusButton.propTypes = {
  label: PropTypes.string.isRequired,
  statusUrl: PropTypes.string.isRequired,
  executeUrl: PropTypes.string.isRequired,
};
