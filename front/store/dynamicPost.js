
import {observable, action} from "mobx";
import axios from "axios";

const dynamicPost = observable({  // e - Error, R - React, Post

  // eRPrender: null,
  post: null,
  postR: action(async (id) => {
    const result = await axios.get(`http://localhost:3001/errors/react/dpost?key=${id}`);
    dynamicPost.post = result.data;
  })
});

export {dynamicPost};
