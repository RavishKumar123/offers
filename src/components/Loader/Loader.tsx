import React from "react";
import { Spinner } from "react-bootstrap";

interface Props {
  message: string;
}
const Loader: React.FC<Props> = ({ message }) => {
  return (
    <h3 className="m-auto text-center">
      {message}
      <Spinner animation="border" className="mx-3" />
    </h3>
  );
};

export default Loader;
