import React,{useState} from 'react';
import Login from '../Login';
import SignUp from '../SignUp';
import styles from './style.module.css'

const Dashboard = (props) => {
    return (
        <div className={styles.wrapper}>
            <Login/>
        </div>
    );
}

export default Dashboard;
