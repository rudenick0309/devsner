import * as React from "react";
import { useState, useCallback } from 'react';
import { useObserver, useLocalStore } from 'mobx-react'
import { inputStore } from "../store/store";
import { action } from 'mobx';

const Home = () => {
  const state = useLocalStore(() => ({
    value: '',
    onChangeTarget(a) {
      this.value = a.target.value;
    }
  }))

  const onSubmit = useCallback((e) => {
    e.preventDefault()

    inputStore.inputGo(state.value);
  }, [])


  return useObserver(()=>(
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input value={state.value} onChange={state.onChangeTarget}/>
          <input type="submit" value="Submit" />
        </form>

        {inputStore.render && <div>{inputStore.render}</div>}

      </div>
    </>
  ));
};

export default Home;


/*

간단한 form , 딱 input 1개 있는거를 만들어보자
component -> input
store -> mobx
back -> localhost 3001/post
db -> mysql and sequelize
여기서 aws를 연습해야 ??

*/
