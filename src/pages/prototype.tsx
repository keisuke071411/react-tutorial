import { Fragment } from "react";
import { Link } from "react-router-dom";

const PrototypePage = (): JSX.Element => {
  return (
    <Fragment>
      <h1>Prototype Page</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/">Homeページボタン</Link>
        <Link to="/tests">Testページボタン</Link>
      </div>
    </Fragment>
  );
};

export default PrototypePage;
