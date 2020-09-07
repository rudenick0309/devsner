
import {observable, action} from "mobx";
import axios from "axios";

const dynamicPost = observable({  // e - Error, R - React, Post

  eRPrender: null,
  eReactPostR: action(async (id) => {
    console.log("in eRP, id : ", id);
    const result = await axios.get(`http://localhost:3001/errors/react/dpost?key=${id}`);
    console.log("in eRP, result : ", result);
    dynamicPost.eRPrender = result.data;
  })
});

export {dynamicPost};
