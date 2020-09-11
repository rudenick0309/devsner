import {observable, action} from "mobx";
import axios from "axios";
import Router from 'next/router'


const auth = observable({   //mobx의 통일된 양식을 찾을 것.
  data: null,

  dataC: action(async (data) => {  // 회원가입
    console.log('mobx, auth, dataC ', data)
    const result = await axios.post("http://localhost:3001/auth/signup", data);
    console.log('mobx, auth, result ', result)
    // Router.push( "/errors/react");

    // TODO: 크롬 개발자 네트워크 탭 => data: {email: "test@test", password: "test", passwordCheck: "test"}
  }),

  dataR: action(async (data) => {   // 유저 로그인
    console.log('mobx, auth, dataR ', data)
    const result = await axios.post('http://localhost:3001/auth/login', data);
    console.log('mobx, auth, result ', result)
    auth.data = result.data;  // TODO; auth일 떄는 data 프로퍼티가 필요한가?
  })
});
export {auth};
