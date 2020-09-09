import * as React from "react";
import {useEffect, useState} from "react";
import AppLayout from "../../components/AppLayout";
import {useObserver, useLocalStore} from "mobx-react";
import {action} from "mobx";
import {errorsReact} from "../../store/errorsReact";
import dynamic from "next/dynamic";
import EReactList from "../../components/EReactList";

const Editor = dynamic(() => import("../../components/Editor"), {
  ssr: false
});
import {toJS} from "mobx";

const eJs = () => {

  useEffect(() => {
    errorsReact.errorsReactR("3");
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

export default eJs;
