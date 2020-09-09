import * as React from "react";
import Head from "next/head";
import "antd/dist/antd.css";
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';

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
