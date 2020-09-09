import * as React from "react";
import {useEffect, useState} from "react";
import AppLayout from "../../components/AppLayout";
import {useObserver, useLocalStore} from "mobx-react";
import {action} from "mobx";
import {editPost} from "../../store/editPost";
import dynamic from "next/dynamic";
import EReactList from "../../components/EReactList";
import {useRouter} from 'next/router'
import {toJS} from "mobx";

const Editor = dynamic(() => import("../../components/Editor"), {
  ssr: false
});


const eReact = () => {

  useEffect(() => {
    editPost.postR("1");
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

export default eReact;
