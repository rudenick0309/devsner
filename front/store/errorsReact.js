
import {observable, action} from "mobx";
import axios from "axios";

const errorsReact = observable({
  render: null,

  errorsReactC: action(async (data) => {
    console.log('in mobx, errorReactC, data : ', data);
    console.log("in mobx, errorReactC, {data} : ", {data});
    const result = await axios.post("http://localhost:3001/errors/react", {data});
    console.log('in mobx, result;', result);
  }),

  errorsReactR: action(async () => {
    const result = await axios.get('http://localhost:3001/errors/react')
    console.log('in error, load : ', result);
    // try {
      errorsReact.render = result.data;
      console.log('in mobx, errorsReact render;', errorsReact.render);
    // } catch(err) {
    //   console.error(err)
    // }
  })
});
export {errorsReact};
