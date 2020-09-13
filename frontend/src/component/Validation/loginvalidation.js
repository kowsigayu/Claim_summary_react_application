export default function validate2(user) {
    let errorMsg = {};

    // Employee Id Validation
    if (!user.userid) {
        errorMsg.empNumber = "Employee Id cannot be Empty"
    } else if (user.userid.length > 6) {
        errorMsg.empNumber = "Employee Id should be minimum length of 6"
    } else if (!/^[0-9]+$/.test(user.userid)) {
        errorMsg.empNumber = "Employee Id should contain only Numbers"
    }

    // password Validation
    if (!user.password) {
        errorMsg.password = "Password cannot be Empty"
    } else if (user.password.length <= 6) {
        errorMsg.password = "Password should be atleast 6 characters"
    }

    return errorMsg;
}
