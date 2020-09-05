import * as React from "react";
import { useState } from 'react';


const Home = () => {
  const [value, setValue] = useState('')
  const onChangeTarget = (a) => {
    setValue(a.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('value', value);
    setValue('');
  }



  return (
    <>
      <div>
        <form onSubmit={onSubmit}>
          <input type={'text'} value={value} onChange={onChangeTarget}/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
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
