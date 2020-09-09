import * as React from "react";
import { useState, useEffect, useCallback } from 'react';
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";
import {dynamicPost} from "../store/dynamicPost";

const EReactList = ({data}) => {
  const {id, title, content, createdAt} = data;
  const [post, setPost] = useState('')

  const onClickPost = useCallback(() => {
    dynamicPost.postR(id);
  },[])

  return (
    <>
      <div>
        <Link href={`/posts/[id]`} as={`/posts/${id}`} >
          <a>
            <div onClick={onClickPost}>{title}</div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default EReactList;
