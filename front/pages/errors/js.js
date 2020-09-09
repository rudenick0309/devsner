import * as React from "react";
import {useEffect, useState} from "react";
import AppLayout from "../../components/AppLayout";
import {useObserver, useLocalStore} from "mobx-react";
import {editPost} from "../../store/editPost";
import dynamic from "next/dynamic";
import EReactList from "../../components/EReactList";

const Editor = dynamic(() => import("../../components/Editor"), {
  ssr: false
});
import {toJS} from "mobx";

const eJs = () => {

  useEffect(() => {
    editPost.postR("3");
  }, []);

  return useObserver(() => (
    <AppLayout>
      {/*<Editor/>*/}
      {toJS(editPost.post) && toJS(editPost.post).reverse().map((el) => {
        return <EReactList data={el}/>;
      })}
    </AppLayout>
  ));
};

export default eJs;
