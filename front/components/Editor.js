import React, {useCallback} from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";
import {editPost} from "../store/editPost";
import {useLocalStore, useObserver} from "mobx-react";
import {action} from "mobx";

const Editor = () => {
  const state = useLocalStore(() => ({
    title: "",
    onChangeTitle: action((e) => {
      state.title = e.target.value;
    }),

    value: "",
    onChangeContent: action((e, editor) => {
      state.value = editor.getData();
    }),

    category: "1",
    onChangeCategory: action((e) => {
      state.category = e.target.value;
    })
  }));

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    editPost.errorsReactC({category: state.category, title: state.title, content: state.value});
    state.title = "";
    state.value = "";
  }, [state.title, state.value]);

  return useObserver(() => (
    <>
      <form onSubmit={onSubmit}>
        <input type={"text"} value={state.title} onChange={state.onChangeTitle}/>
        <select value={state.category} onChange={state.onChangeCategory}>
          <option value="1">errors react</option>
          <option value="2">errors next</option>
          <option value="3">errors js</option>
          <option value="5">study logs react</option>
          <option value="6">study logs next</option>
          <option value="7">study logs js</option>
        </select>
        <CKEditor
          data={state.value}
          onInit={editor =>
            console.log("Editor is ready to use!", editor)
          }
          onChange={state.onChangeContent}
          config={{
            ckfinder: {
              uploadUrl: "/upload/images"
            }
          }}
          editor={ClassicEditor}
        />
        <input type={"submit"} title={"submit"}/>
      </form>

      {state.value && <div>{ReactHtmlParser(state.value)}</div>}
    </>
  ));
};

export default Editor;
