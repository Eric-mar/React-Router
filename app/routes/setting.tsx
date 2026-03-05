import {Link, Outlet, useLoaderData} from "react-router"


export function loader(){
    return{ message: "Hello, Eric!"}

}
export default function setting(){
    const data = useLoaderData<typeof loader>()
    return (
        <div>
        <h1>setting</h1>
        <p>This is the setting page</p>
        <p>Message from the loader: {data.message}</p>

        <nav>
            <Link to="app"  >App</Link>
            <Link  to="profile" >Profile</Link>
        </nav>
        <Outlet/>
        </div>
    )
       
}