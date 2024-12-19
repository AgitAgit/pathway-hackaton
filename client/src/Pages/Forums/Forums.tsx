import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

//get logged in user data
//fetch forums function
//create forum function
// const response = await axios.post(
//     "http://localhost:3000/api/users/login",
//     {
//       username,
//       password,
//     }
//   );
//create post function
//create comment function

function Forums({}){
    const user = useSelector((state) => state.user.user);
    console.log(user);

    async function getForumsData(){
        try {
            const response = await axios.get(
                "http://localhost:3000/api/forums");
        } catch (error) {
            
        }
    }

    return<>

    </>
}

export default Forums;