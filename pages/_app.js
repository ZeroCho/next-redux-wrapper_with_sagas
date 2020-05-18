import React from "react";
import App from "next/app";
import Head from "next/head";
import { END } from "redux-saga";
import wrapper from "../store/configureStore";

class MyApp extends App {
  // Important to specify the static prefix.
  static async getInitialProps({ Component, ctx }) {
    const { req, store } = ctx;

    // 1. Wait for all page actions to dispatch
    const pageProps = {
      ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    };

    // 2. Stop the saga if on server
    if (req) {
      store.dispatch(END);
      await store.sagaTask.toPromise();
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>MyApp</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
export default wrapper.withRedux(MyApp);
