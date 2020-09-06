import React, {useState, useCallback} from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


const Testpage = () => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e, editor) => {
    const data = editor.getData();
    console.log('in testpage, data;', data);
    setValue(data)
  }, [])


  return (
    <>
      <CKEditor
        data="<p>Hello from CKEditor 5!!</p>"
        onInit={editor =>
          console.log("Editor is ready to use!", editor)
        }
        onChange={onChange}
        editor={ClassicEditor}
      />
      {value && <div>{ReactHtmlParser(value)}</div>}
    </>
  );
};


export default Testpage;
