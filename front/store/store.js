// const {observable} = require('mobx')
import {observable, action} from "mobx";
import axios from "axios";

const inputStore = observable({
  loading: false,
  render: null,
  inputGo: action(async (data) => {    // isInputLoading, isInputSuccess, isInputFailed 를 사용할 것인가?
    //-> 만약 사용을 한다면은, 어차피 얘네는 구조분해 할당이 안되기 때문에, inputStore.isLoading 이런 식으로 해도 괜찮지 않나? 아니면 Loading으로 줄여도 되겠는데? 그럼 소문자로 쓰자?
    // inpustStore.loading = true;
    console.log('in mobx, data : ', data);
    let result = await axios.post("http://localhost:3001/test/", {data});
    console.log('in mobx, result;', result);
    try {
      inputStore.loading = false;
      inputStore.success = true;
      inputStore.render = result;
    } catch (err) {
      console.error(err);
      inputStore.loading = false;
      inputStore.failed = true;
    }
  })
});
export {inputStore};

/*

try catch는? inputGo 안에서 쓰면 되는건가?

Promise 객체에 대해서 개념이 부족하구나 지금.

*/
