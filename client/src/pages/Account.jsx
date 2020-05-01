import React from 'react'
import {useSelector} from "react-redux";
import { Redirect } from 'react-router-dom';

export default function Account() {
    const auth = useSelector(state=>state.main.Auth);

    return (
        <div>
            {!auth && <Redirect to="/"/>}
            Account
        </div>
    )
}
