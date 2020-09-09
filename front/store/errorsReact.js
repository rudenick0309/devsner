import {observable, action} from "mobx";
import axios from "axios";

const errorsReact = observable({
  render: null,

  errorsReactC: action(async (data) => {
    console.log('mobx, errorsReactC, data ; ', data)
    const result = await axios.post("http://localhost:3001/errors/react", {data});
  }),

  errorsReactR: action(async (data) => {
    console.log('mobx errorsReactR data;', data);
    const result = await axios.get(`http://localhost:3001/errors/react?key=${data}`);
    errorsReact.render = result.data;
  })
});
export {errorsReact};
