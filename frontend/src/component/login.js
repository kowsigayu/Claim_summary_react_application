import React from 'react';
// import { Link } from 'react-router-dom';
import useLoginForm from './Validation/useLoginForm';
import loginValidate from './Validation/loginvalidation';

const Login = (submitForm) => {
    const { onSubmit, onInputChange, errorMsg, user } = useLoginForm(submitForm, loginValidate);

    return (
        <div className="App">
            <form id="login-form">
                <h1>LOGIN</h1>
                <input type="text"
                    placeholder="Employee ID"
                    id="userid"
                    value={user.userid}
                    name="userid"
                    onChange={onInputChange}
                    required
                />
                <span className="text-danger">{errorMsg.empNumber}</span>
                <input type="password"
                    placeholder="Password"
                    id="userpass"
                    value={user.password}
                    name="password"
                    onChange={onInputChange}
                    required
                />
                <span className="text-danger">{errorMsg.password}</span>
                <div>
                    {/* <Link className="btn btn-primary mr-2" id="signinbutton" >Sign In</Link> */}
                    <button type="submit" className="btn btn-primary mr-2" id="signinbutton" data-testid="Login" onClick={onSubmit}>Sign In</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
