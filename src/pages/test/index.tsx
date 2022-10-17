import { Fragment } from "react";
import { Link } from "react-router-dom";

const TestPage = (): JSX.Element => {
  return (
    <Fragment>
      <h1>Test Page</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/">Homeページボタン</Link>
        <Link to="/prototype">Prototypeページボタン</Link>
        <Link to="/tests/1">詳細１ページボタン</Link>
        <Link to="/tests/2">詳細２ページボタン</Link>
        <Link to="/tests/3">詳細３ページボタン</Link>
      </div>
    </Fragment>
  );
};

export default TestPage;
