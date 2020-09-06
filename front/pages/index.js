import * as React from "react";
import { useState, useCallback } from 'react';
import { useObserver, useLocalStore } from 'mobx-react'
import { inputStore } from "../store/store";
import { action } from 'mobx';

const Home = () => {
  const state = useLocalStore(() => ({
    value: '',
    onChangeTarget: action((a) => {
      state.value = a.target.value;
    }),
    areaValue: '',
    onChangeArea: action((a) => {
      state.areaValue = a.target.value;
    })
  }))

  const onSubmit = useCallback((e) => {
    e.preventDefault()
    console.log('in onsubmit, value: ', state.value, '/', state.areaValue);
    inputStore.inputGo({value: state.value, areaValue:state.areaValue});
    // inputStore.inputGo({state.value, state.areaValue});
  }, [])


  return useObserver(()=>(
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input value={state.value} onChange={state.onChangeTarget}/>
          <textarea value={state.areaValue} onChange={state.onChangeArea} />
          {/*<input type="submit" value="Submit" />*/}
          <button type={'submit'}/>
        </form>

        {/*{inputStore.render && <div>{inputStore.render}</div>}*/}

      </div>
    </>
  ));
};

export default Home;


/*


component -> input
store -> mobx
back -> localhost 3001/post
db -> mysql and sequelize


*/
