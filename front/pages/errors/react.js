import * as React from "react";
import {useEffect, useState} from "react";
import AppLayout from "../../components/AppLayout";
import {useObserver, useLocalStore} from "mobx-react";
import {action} from "mobx";
import {errorsReact} from "../../store/errorsReact";
import dynamic from "next/dynamic";
import EReactList from "../../components/EReactList";
import {useRouter} from 'next/router'
import {toJS} from "mobx";

const Editor = dynamic(() => import("../../components/Editor"), {
  ssr: false
});


const eReact = () => {

  useEffect(() => {
    errorsReact.errorsReactR("1");
  }, []);

  return useObserver(() => (
    <AppLayout>
      {/*<Editor/>*/}
      {toJS(errorsReact.render) && toJS(errorsReact.render).reverse().map((el) => {
        return <EReactList data={el}/>;
      })}
    </AppLayout>
  ));
};

export default eReact;
