/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { useState } from 'react';

const useUpdateForm = (submitForm, validate2) => {
    const [user, setUser] = useState({
        userid: '',
        password: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMsg, setErrors2] = useState({});

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const onSubmit = async e => {
        e.preventDefault();
        setIsSubmitted(true);
        setErrors2(validate2(user));
        console.log("handle2 Submit method executed in useUpadteForm");
        if (Object.keys(errorMsg).length === 0 && isSubmitted) {
            console.log("route path");
            window.location.href = "/viewclaim";
        }
    };

    return { onSubmit, onInputChange, errorMsg, user }
};

export default useUpdateForm;