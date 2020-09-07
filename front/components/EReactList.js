import * as React from "react";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";

const EReactList = ({data}) => {
  console.log("in EReactList, props", data);
  const {id, title, content, createdAt} = data;

  return (
    <>
      <div>
        <Link href={`/posts/[id]`} as={`/posts/${id}`}>
          <a>
            {/*<img src={`/static/images/${feed.slug}.png`} />*/}
            <div>{title}</div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default EReactList;
