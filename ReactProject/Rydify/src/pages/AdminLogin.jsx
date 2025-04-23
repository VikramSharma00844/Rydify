import axios from "axios";
import {useForm} from "react-hook-form"
function AdminLogin(){
    const{
        register,
        handleSubmit,
        formState:{errors},
        reset
    }=useForm();

    async function onSubmit(data){
        
        console.log(data);
        let url="http://localhost:5000/"+"admin-login"
        let response=await axios.post(url,data,);
        const{error,message,token}=response.data;
        let duration=86400;
        document.cookie=`userToken=${token} path=/ max-age=${duration}`;

        console.log(token);
        if(error)
        {
            console.log(error)
        }
        else{
            console.log("success");
            //const token=getCookie('userToken');
        }
    }

    return(
        <>
        
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                    <div className="col-12 mb-3">
                        <label>Email</label>
                        <input type="email" id="email" className="form-control" {...register('email')} />
                    </div>

                    <div className="col-12 mb-3">
                        <label>Password</label>
                        <input type="password" id="password" className="form-control" {...register('password')} />
                    </div>

                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>


        </>
    )
}
export default AdminLogin ;