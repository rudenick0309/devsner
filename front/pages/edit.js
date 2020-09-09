import * as React from 'react';
import AppLayout from "../components/AppLayout";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("../components/Editor"), {
  ssr: false
});

// TODO: 권한 기능만 넣어주면 일단은 오케이.
const Edit = () => {
  return (
    <AppLayout>
      <Editor />
    </AppLayout>
  )
}

export default Edit;
