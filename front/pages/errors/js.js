import * as React from "react";
import {useEffect, useState} from "react";
import AppLayout from "../../components/AppLayout";
import {useObserver, useLocalStore} from "mobx-react";
import {action} from "mobx";
import {editPost} from "../../store/editPost";
import dynamic from "next/dynamic";
import EReactList from "../../components/EReactList";

const Editor = dynamic(() => import("../../components/Editor"), {
  ssr: false
});
import {toJS} from "mobx";

const eJs = () => {

  useEffect(() => {
    editPost.errorsReactR("3");
  }, []);

  return useObserver(() => (
    <AppLayout>
      {/*<Editor/>*/}
      {toJS(editPost.render) && toJS(editPost.render).reverse().map((el) => {
        return <EReactList data={el}/>;
      })}
    </AppLayout>
  ));
};

export default eJs;
