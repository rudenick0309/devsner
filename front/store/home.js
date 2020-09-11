//
// import {observable, action} from "mobx";
// import axios from "axios";
//
// const home = observable({  // e - Error, R - React, Post
//
//   // eRPrender: null,
//   post: null,
//   postR: action(async () => {
//     console.log('mobx, home, postR 실행 ')
//     const result = await axios.get('http://localhost:3001/');
//     console.log('mobx, home, postR result', result)
//     home.post = result.data;
//   })
// });
//
// export {home};
