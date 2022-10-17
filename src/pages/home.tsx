import { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = (): JSX.Element => {
  return (
    <Fragment>
      <h1>Home Page</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/prototype">Prototypeページボタン</Link>
        <Link to="/tests">Testページボタン</Link>
      </div>
    </Fragment>
  );
};

export default Home;
