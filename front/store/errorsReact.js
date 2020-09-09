import {observable, action} from "mobx";
import axios from "axios";

const errorsReact = observable({
  render: null,

  errorsReactC: action(async (data) => {
    const result = await axios.post("http://localhost:3001/errors/react", {data});
  }),

  errorsReactR: action(async () => {
    const result = await axios.get("http://localhost:3001/errors/react");
    errorsReact.render = result.data;
  })
});
export {errorsReact};
