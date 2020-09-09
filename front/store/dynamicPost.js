
import {observable, action} from "mobx";
import axios from "axios";

const dynamicPost = observable({  // e - Error, R - React, Post

  eRPrender: null,
  eReactPostR: action(async (id) => {
    console.log('mobx 컴포넌트입니다 - 2')
    // console.log("in eRP, id : ", id);
    const result = await axios.get(`http://localhost:3001/errors/react/dpost?key=${id}`);
    // console.log("in eRP, result : ", result);
    dynamicPost.eRPrender = result.data;
    console.log('mobx 컴포넌트입니다, 위에서 요청 끝낫어요 - 3', dynamicPost.eRPrender)
  })
});

export {dynamicPost};
