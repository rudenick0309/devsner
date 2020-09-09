import React, {useCallback, useRef, useState, useEffect, Component} from "react";

import {Editor} from "@toast-ui/react-editor";

import ReactHtmlParser from "react-html-parser";
import {editPost} from "../store/editPost";
import {useLocalStore, useObserver} from "mobx-react";
import {action} from "mobx";
import {dynamicPost} from "../store/dynamicPost";


class EditArticle extends Component {
  editorRef = React.createRef();
  titleRef = React.createRef();
  categoryRef = React.createRef();

  constructor() {
    super();
    this.state = {
      content: "",
      title: "",
      category: "1",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.categoryRef.current === null) {
      this.categoryRef.current = '1'
    }
    this.setState({
      content: this.editorRef.current.getInstance().getHtml(),
      title: this.titleRef.current,
      category: this.categoryRef.current,
    });
  };

  onChangeTitle = (e) => {
    this.titleRef.current = e.target.value;
  };

  onChangeCategory = (e) => {
    this.categoryRef.current = e.target.value;
  };

  componentDidUpdate() {
    editPost.postC(this.state);
  }


  render() {
    console.log("f editor content; ", this.state.content);
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <input type={"text"} value={this.title} onChange={this.onChangeTitle}/>

          <select value={this.category} onChange={this.onChangeCategory}>
            <option value="1">errors react</option>
            <option value="2">errors next</option>
            <option value="3">errors js</option>
            <option value="5">study logs react</option>
            <option value="6">study logs next</option>
            <option value="7">study logs js</option>
          </select>
          <Editor
            previewStyle="vertical"
            height="300px"
            initialEditType="wysiwyg"
            placeholder="글쓰기"
            ref={this.editorRef}
          />
          <input type={"submit"} title={"submit"}/>
        </form>
      </>
    );
  }
}

export default EditArticle;


//
// <form onSubmit={onSubmit}>
//   <input type={"text"} value={state.title} onChange={state.onChangeTitle}/>
//   <select value={state.category} onChange={state.onChangeCategory}>
//     <option value="1">errors react</option>
//     <option value="2">errors next</option>
//     <option value="3">errors js</option>
//     <option value="5">study logs react</option>
//     <option value="6">study logs next</option>
//     <option value="7">study logs js</option>
//   </select>
//   <CKEditor
//     data={state.value}
//     onInit={editor =>
//       console.log("Editor is ready to use!", editor)
//     }
//     onChange={state.onChangeContent}
//     config={{
//       ckfinder: {
//         uploadUrl: "/upload/images"
//       }
//     }}
//     editor={ClassicEditor}
//   />
//   <input type={"submit"} title={"submit"}/>
// </form>
//
// {state.value && <div>{ReactHtmlParser(state.value)}</div>}
