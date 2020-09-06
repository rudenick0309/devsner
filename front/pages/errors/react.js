import * as React from "react";
import AppLayout from "../../components/AppLayout";
import dynamic from 'next/dynamic'
const Editor = dynamic(() => import('../../components/Editor'), {
  ssr:false
})

const errorReact = () => {
  return (
    <AppLayout>
      <Editor/>
    </AppLayout>
  );
};

export default errorReact;
