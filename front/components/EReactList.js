import * as React from "react";
import { useState, useEffect, useCallback } from 'react';
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import {dynamicPost} from "../store/dynamicPost";

const EReactList = ({data}) => {
  const {id, title, content, createdAt} = data;
  const [post, setPost] = useState('')

  const onClickPost = useCallback(() => {
    // console.log('EReactList 컴포넌트입니다 - 1')
    dynamicPost.eReactPostR(id);
  },[])

  return (
    <>
      <div>
        <Link href={`/posts/[id]`} as={`/posts/${id}`} >
          <a>
            {/*<img src={`/static/images/${feed.slug}.png`} />*/}
            <div onClick={onClickPost}>{title}</div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default EReactList;
