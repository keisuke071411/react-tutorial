import { Fragment } from "react";
import { Link } from "react-router-dom";

const PrototypePage = (): JSX.Element => {
  return (
    <Fragment>
      <h1>Prototype Page</h1>
      <Link to="/">Homeページボタン</Link>
    </Fragment>
  );
};

export default PrototypePage;
