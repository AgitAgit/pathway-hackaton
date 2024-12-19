import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//get logged in user data
//fetch forums function
//create forum function
//create post function
//create comment function

function Forms({}){
    const user = useSelector((state) => state.user.user);
    console.log(user);
    return<>

    </>
}

export default Forms;