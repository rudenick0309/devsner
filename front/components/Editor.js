import React, {useState, useCallback} from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const Editor = () => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e, editor) => {
    const data = editor.getData();
    console.log('in editor,onchange, data;', data);
    setValue(data)

  }, [value])

  const onSubmit = useCallback((e)=>{
    e.preventDefault();
    //ajax
    console.log('in editor, onsubmit, 1 value;',value); // 그저 value 만 mobx로 보내주면 된다

    setValue('')
  },[value])

  return (
    <>

      <form onSubmit={onSubmit}>
        <CKEditor
          data={value}
          onInit={editor =>
            console.log("Editor is ready to use!", editor)
          }
          onChange={onChange}
          editor={ClassicEditor}
        />
        <input type={'submit'} title={'submit'}/>
      </form>

      {value && <div>{ReactHtmlParser(value)}</div>}
    </>
  );
};


export default Editor;
