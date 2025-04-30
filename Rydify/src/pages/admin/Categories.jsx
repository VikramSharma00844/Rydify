import axios from "axios";
import {server_url,getCookie} from "../../utils/script.jsx";
import {useForm} from "react-hook-form";

function Categories(){
const{
    register,
    handleSubmit,
    formState:{erros},
    reset
}=useForm();

async function onSubmit(data){
    const token=getCookie('AdminToken');
    console.log(token);
    const url=`${server_url}add-category`;
    let response=await axios.post(url,data,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    // console.log(response.data);
    
    const{error,message}=response.data;
    if(error)
    {
        console.log(message);
    }
    else{
        console.log(message);
    }

}
    return(
        <>
        <div className="container ">
            <h1>Add Categories Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row col-md-6">
                    <label>Category</label>
                    <input type="text" className="form-control mb-3" {...register('category')} />

                    
                </div>
                <div className="col-md-4">
                    <button className="btn btn-primary mb-3">Add Category</button>
                </div>
            </form>
        </div>
        
        </>
    )
}
export default Categories;