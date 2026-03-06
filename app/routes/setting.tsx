import{Await, Link, Outlet, useLoaderData, useLocation} from "react-router"
import React from "react"


export async function loader(){
   

    const slowMessage = await new Promise <string>(resolve=>{
        setTimeout(()=> resolve('this is a slow message that was created! '),3000)
    })
    
    return{ message: "Hello, Eric!",slowMessage}

}
export default function setting(){
    const data = useLoaderData<typeof loader>()
    const location = useLocation()
    return (
        <div>
        <h1>setting</h1>
        <p>This is the setting page</p>
        <p>Message from the loader: {data.message}</p>

        <React.Suspense fallback={<div>Loading.....</div>}  key={location.pathname}>
        <Await resolve={data.slowMessage}>
            {(value)=><h2>Message from the Promise : {value}</h2>}
        </Await>

        </React.Suspense>

        

        <nav>
            <Link to="app"  >App</Link>
            <Link  to="profile" >Profile</Link>
        </nav>
        <Outlet/>
        </div>
    )
       
}