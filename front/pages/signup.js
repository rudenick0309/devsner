import * as React from 'react';
import AppLayout from "../components/AppLayout";
import {useForm} from "react-hook-form";
import {useCallback, useState} from "react";
import {auth} from "../store/auth";


const Signup = () => {
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = useCallback((data) => {
    auth.dataC(data);
  }, []);

  return (
    <AppLayout>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>
            email
          </label>
          <input type={'email'} name="email" ref={register({ required:true , minLength: 2})}/>
        </div>

        <div>
          <label>
            password
          </label>
          <input type={'password'} name="password" ref={register({ required:true, minLength: 2 })}/>
        </div>

        {/*<div>*/}
          <label>
            password-check
          </label>
          <input type={'password'} name="passwordCheck" ref={register({ required:true })}/>
          {/*{errors.passwordCheck && <p>비밀번호가 다릅니다</p>} TODO:안됨  */}
        {/*</div>*/}

        <input type="submit"/>
      </form>
    </AppLayout>
  )
}

export default Signup;
