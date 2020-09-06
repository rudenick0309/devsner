import * as React from "react";
import {useState, useCallback} from "react";
import {useObserver, useLocalStore} from "mobx-react";
import {inputStore} from "../store/store";
import {action} from "mobx";
import {Row, Col} from "antd";
import AppLayout from "../components/AppLayout";


const Home = () => {

  return (
    <AppLayout>
      <div>home test</div>
    </AppLayout>

  );
};

export default Home;


/*


component -> input
store -> mobx
back -> localhost 3001/post
db -> mysql and sequelize


*/
