import * as React from "react";
import {useCallback} from "react";
import {useForm} from "react-hook-form";
import AppLayout from "../components/AppLayout";
import {auth} from "../store/auth";
import {useObserver} from "mobx-react";


const Login = () => {
  const {register, handleSubmit} = useForm();
  const onSubmit = useCallback((data) => {
    console.log("이것도 출력이 되나요?");
    console.log(data);  //TODO:로그인은 여기서부터 mobx 스토어 구성하고, back 구성하면 된다.
    auth.dataR(data);
  }, []);


  return useObserver(() => (
    <AppLayout>
      {!auth.data
        ? (<form onSubmit={handleSubmit(onSubmit)}>

          <div>
            <label>
              email
            </label>
            <input type={"email"} name="email" ref={register}/>
          </div>

          <div>
            <label>
              password
            </label>
            <input type={"password"} name="password" ref={register}/>
          </div>

          <input type="submit"/>
        </form>)
        : (<div>{`${auth.data.email}님 반갑습니다`}</div>)
      }

    </AppLayout>
  ));
};

export default Login;
