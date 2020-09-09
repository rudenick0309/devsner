import React, {useCallback} from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";
import {errorsReact} from "../store/errorsReact";
import {useLocalStore, useObserver} from "mobx-react";
import {action} from "mobx";

const Editor = () => {
  const state = useLocalStore(() => ({
    title: '',
    value: "",
    onChangeTitle: action((e) => {
      state.title = e.target.value;
    }),
    onChangeContent: action((e, editor) => {
      state.value = editor.getData();
    }),
  }));

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    //ajax
    console.log("in editor, onsubmit, 1 value;", state.value); // 그저 value 만 mobx로 보내주면 된다
    errorsReact.errorsReactC({title: state.title, content: state.value});
    state.title = ''
    state.value = ''
  }, [state.title, state.value]);

  return useObserver(() => (
    <>
      <form onSubmit={onSubmit}>
        <input type={'text'} value={state.title} onChange={state.onChangeTitle}/>

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
