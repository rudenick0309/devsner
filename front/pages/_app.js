import * as React from "react";
import Head from "next/head";
import "antd/dist/antd.css";

const Devsner = ({Component}) => {
  return (
    <>
      <Head>
        <title>devsner</title>
      </Head>

      <Component/>

    </>
  );
};

export default Devsner;
