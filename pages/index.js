import { useSelector } from "react-redux";
import { doThings } from "../store/actions";

const IndexPage = () => {
  const store = useSelector(state => state);
  console.log("store", store);

  return <div>Hello World.</div>;
};

IndexPage.getInitialProps = ctx => {
  const { isServer, store } = ctx;

  store.dispatch(doThings());
  return { isServer };
};

export default IndexPage;
