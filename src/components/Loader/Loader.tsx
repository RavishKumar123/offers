import React, { memo } from "react";
import { Spinner } from "react-bootstrap";

interface Props {
  message: string;
}

//using memo() because It will rerender only when props change
const Loader: React.FC<Props> = memo(({ message }) => (
  <h3 className="m-auto text-center">
    {message}
    <Spinner animation="border" className="mx-3" />
  </h3>
));

export default Loader;
