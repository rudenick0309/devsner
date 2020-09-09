import * as React from "react";
import {useState, useEffect} from "react";
import {dynamicPost} from "../../store/dynamicPost";
import AppLayout from "../../components/AppLayout";
import {toJS} from "mobx";
import {inject, observer} from "mobx-react";
import {useRouter} from "next/router";
import ReactHtmlParser from "react-html-parser";

// 컴포넌트 전체에 setTImeout을 주는 거는??
const Post = () => {
  const [post, setPost] = useState('')
  // const {title, content, createdAt} = post
  // const postData =
  //
  // useEffect(() => {
  //   setPost('')
  //   setTimeout(() => {
  //     console.log('in f post, dynamic render;', toJS(dynamicPost.eRPrender));
  //   }, 1000)
  //   // setPost(toJS(dynamicPost.eRPrender))
  // }, [])

  console.log("Post 컴포넌트입니다 - 4", toJS(dynamicPost.eRPrender));
  useEffect(() => {
    setPost(toJS(dynamicPost.eRPrender))
  }, [])
  console.log("Post 컴포넌트입니다 - 5", post);
  return (
    <AppLayout>
      <div> {toJS(dynamicPost.eRPrender.createdAt)} </div>
      <div> {toJS(dynamicPost.eRPrender.title)} </div>
      <div> {ReactHtmlParser(toJS(dynamicPost.eRPrender.content))} </div>
      {/*<div> {title}</div>*/}
      {/*<div> {ReactHtmlParser(content)}</div>*/}
    </AppLayout>
  );
};


export default Post;


// export async function getServerSideProps(context) {
//   console.log("in getserverside, context,; ", context.query.id);
//   await dynamicPost.eReactPostR(context.query.id);  // request success
//   console.log('in getserverside, context, eRPrender ;' , dynamicPost.eRPrender);
//   let postData = dynamicPost.eRPrender;
//   console.log('in getserverside, context, postData;', postData);
//   return {
//     props: {data: toJS(postData)}
//   };
// }

//  1
// Post.getInitialProps = async ({res, query}) => {
//   console.log("in Post, getIP, res  ;", res);
//   console.log("in Post, getIP, query  ;", query);  // { id : 3 }
//   await dynamicPost.eReactPostR(query.id);
//   let postData = await toJS(dynamicPost.eRPrender)
//   console.log('in getinitialProps data;' , postData);
//   return {postData};
// };
// console.log("out f post, postData ", postData);
//
// // 2
// export async function getServerSideProps(context) {
//   console.log(context)
//   await dynamicPost.eReactPostR(context.params.id);
//   let post = await toJS(dynamicPost.eRPrender)
//   console.log('in 겟서버사이드, post', post);
//   return {props: {post}}
// }
//
// // 3

