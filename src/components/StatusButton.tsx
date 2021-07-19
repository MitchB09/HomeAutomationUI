import React, { useEffect, useState } from "react";
import SimpleButton from "./SimpleButton";
import api from "../api";

type StatusButtonProps = {
  label: string;
  statusUrl: string;
  executeUrl: string;
};

const StatusButton = ({ label, statusUrl, executeUrl }: StatusButtonProps) => {
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    api
      .get(statusUrl)
      .then(() => {
        setStatus(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [statusUrl]);

  const execute = () => {
    api
      .post(executeUrl)
      .then((response) => {
        // handle success
        console.log(response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  };

  return <SimpleButton label={label} onClick={execute} disabled={!status} />;
};

export default StatusButton;
