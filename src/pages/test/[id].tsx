import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

type Params = {
  id: string;
};

const TestDetailPage = (): JSX.Element => {
  const { id } = useParams<Params>();

  return (
    <Fragment>
      <h1>Home {id} Page</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/">Homeページボタン</Link>
        <Link to="/prototype">Prototypeページボタン</Link>
        <Link to="/tests">Testページボタン</Link>
      </div>
    </Fragment>
  );
};

export default TestDetailPage;
