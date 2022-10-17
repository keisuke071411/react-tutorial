import { Fragment } from "react";
import { Link } from "react-router-dom";

const Home = (): JSX.Element => {
  return (
    <Fragment>
      <h1>Home Page</h1>
      <Link to="/prototype">Prototypeページボタン</Link>
    </Fragment>
  );
};

export default Home;
