import Test from './Test'
import Tailwind from "./Tailwind";

import styles from './App.module.css'

import { Title } from "./Components";

import './tailwind.css'

function Styles(){
    return (
        <div className={styles.App}>
            <Title> Test </Title>
            <Title theme="dark">dark test</Title>
            <Tailwind />

            <br/>
            <Test />
            <br/>
            {process.env.NODE_ENV}
            <br/>
            {process.env.REACT_APP_DEV_NAME}
        </div>
    );
}

export default Styles;