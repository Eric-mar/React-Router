import {Link, Outlet} from "react-router"
export default function setting(){
    return (
        <div>
        <h1>setting</h1>
        <p>This is the setting page</p>


        <nav>
            <Link to="app"  >App</Link>
            <Link  to="profile" >Profile</Link>
        </nav>
        <Outlet/>
        </div>
    )
       
}