import {Link} from "react-router-dom";
function AdminHome(){
    return(
        <>
        <Link to="/admin/categories"><button>Add Category</button></Link>
       
        </>
    )
}
export default AdminHome;