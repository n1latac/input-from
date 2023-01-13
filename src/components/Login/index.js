import React,{useReducer} from 'react';
import LoginValidation from './LoginValidation';

const initialState = {
    email:'',
    password:'',
    checkbox: false,
}

const Login = (props) => {
    function reducer(state,action){

    }
const [state, dispatch] = useReducer(reducer,initialState);

    const handleSubmitToFormik = (values,actions) => {
        console.log(values);
    }
    console.log(initialState);
    return (
        <LoginValidation handleSubmitToFormik={handleSubmitToFormik} initialState={initialState}/>
    );
}

export default Login;
