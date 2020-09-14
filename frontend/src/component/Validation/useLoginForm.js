/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { useState } from 'react';

const useUpdateForm = (submitForm, loginValidate) => {
    const [user, setUser] = useState({
        userid: '',
        password: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMsg, setErrors] = useState({});

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const onSubmit = async e => {
        e.preventDefault();
        setIsSubmitted(true);
        setErrors(loginValidate(user));
        if (Object.keys(errorMsg).length === 0 && isSubmitted) {
            console.log("route path");
            window.location.href = "/viewclaim";
        }
    };

    return { onSubmit, onInputChange, errorMsg, user }
};

export default useUpdateForm;