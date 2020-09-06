import * as React from "react";
import Head from "next/head";

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
