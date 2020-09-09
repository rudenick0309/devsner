import {observable, action} from "mobx";
import axios from "axios";

const editPost = observable({
  post: null,

  postC: action(async (data) => {
    console.log('mobx, errorsReactC, data ; ', data)
    const result = await axios.post("http://localhost:3001/errors/react", {data});
  }),

  postR: action(async (data) => {
    console.log('mobx errorsReactR data;', data);
    const result = await axios.get(`http://localhost:3001/errors/react?key=${data}`);
    editPost.post = result.data;
  })
});
export {editPost};
