import * as React from "react";
import {useState, useCallback} from "react";

const Errors = () => {
  const [toggle, setToggle] = useState(false);

  const onChangeToggle = useCallback(() => {

    setToggle((prev) => !prev);
    console.log("in errors, toggle ; ", toggle);
  }, []);

  return (
    <>
      <div onClick={onChangeToggle}>
        에러 토글 버튼
      {/*{toggle && (*/}
      {/*  <>*/}
          <div >react</div>
          <div >next</div>
          <div >js</div>
      {/*  </>*/}
      {/*)}*/}
      </div>
    </>
  );
};

export default Errors;
