import { useState } from "react";

import { Navigate } from "react-router";



export default function App(){
    const [users,setUsers]= useState<string|null>('Eric')
    if(!users){
                return <Navigate to="/" replace={true} />
    }

    return (
        <div>
            <h3 className="text-3xl p-3 text-blue-500 font-bold ">Welcome to the app settting 🌞🌞🌞

            </h3>
            <p>this is a app page of the setting</p>

            <button className="bg-[#3b11b9d7] p-4 m-4 " onClick={() =>setUsers(null) }>
                LogOut</button>
        </div>
    )
}