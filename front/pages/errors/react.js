
import * as React from "react";
import { useEffect, useState } from 'react';
import AppLayout from "../../components/AppLayout";
import {useObserver, useLocalStore} from 'mobx-react'
import { action } from 'mobx';
import {errorsReact} from "../../store/errorsReact";
import dynamic from 'next/dynamic'
import EReactList from "../../components/EReactList";
const Editor = dynamic(() => import('../../components/Editor'), {
  ssr:false
})

const errorReact = () => {

  useEffect(() => {
    errorsReact.errorsReactR()
  }, [])

  console.log('in errorsReact, render; ', errorsReact.render);

  return useObserver(() => (
    <AppLayout>
      <Editor/>
      {/*{errorsReact.render && errorsReact.render.map((el) => {*/}
      {/*  return <EReactList data={el} />*/}
      {/*})}*/}
    </AppLayout>
  ));
};

export default errorReact;
