import React, {Component} from "react";
import {Editor} from "@toast-ui/react-editor";
import {editPost} from "../store/editPost";
import Router from 'next/router'

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
    if (this.state.content && this.state.title && this.state.category) {
      editPost.postC(this.state);
    }
    if (this.state.category === '1') {
      Router.push( "/errors/react");
    }
    if (this.state.category === '2') {
      Router.push( "/errors/next");
    }
    if (this.state.category === '3') {
      Router.push( "/errors/js");
    }
  }

  // componentWillUnmount() {
  //   console.log('이거 사라져요?')
  // }


  render() {
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
