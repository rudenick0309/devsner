import * as React from "react";
import ReactHtmlParser from "react-html-parser";

const EReactList = ({data}) => {
  console.log("in EReactList, props", data);
  const {title, content, createdAt} = data;

  return (
    <>
      <div>{title}</div>
    </>
  );
};

export default EReactList;
