import axios from "axios";
import {server_url,getCookie} from "../../utils/script.jsx";
import { useState,useEffect } from "react";
import {toast} from "react-toastify";
import {useForm} from "react-hook-form";
import React from 'react';
import { Popconfirm } from 'antd';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const confirm = e => {
  console.log(e);
  message.success('Click on Yes');
};
const cancel = e => {
//   console.log(e);
//   message.error('Click on No');
};

function ManageDealer(){

    const [contacts,setContacts]=useState([]);
    async function readAllDealers(){
        let url=`${server_url}fetch-dealer`;
        let response=await axios(url);

        const{error,message,records}=response.data;
        console.log(records);
        if(error){
            toast.error(message);
        }
        else{
            setContacts(records);
        }
    }
    useEffect(()=>{
        readAllDealers();
    },[]);
    async function deleteDealer(id){
        const token=getCookie('AdminToken');
        console.log(token);
        console.log(id);
        let url=`${server_url}delete-dealer/${id}`;
        let response=await axios.delete(url);

        const{error,message}=response.data;
        if(error)
        {
            toast.error(message);
        }
        else{
            readAllDealers();
            toast.success(message);
        }
    }

    const{
            register,
            handleSubmit,
            formState:{errors},
            reset,
            setValue
        }=useForm();

        async function onSubmit(data){
                
                const url=`${server_url}update-dealer`;
                let response=await axios.post(url,data);
                console.log(response);
        
                const {error,message}=response.data;
                if(error)
                {
                    toast.error(message);
                }
                else{
                    readAllDealers();
                    toast.success(message);
                }
            }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function showDataInForm(obj){
        // console.log(obj);
        setValue('id',obj.id);
        setValue('name',obj.name);
        setValue('email',obj.email);
        setValue('password',obj.password);
        setValue('adhar',obj.adhar);
        setValue('pan',obj.pan);
        setValue('mobile',obj.mobile);
        setValue('gender',obj.gender);
        setValue('city',obj.city);
        setValue('status',obj.status);
        setValue('photo',obj.photo);
        setValue('address',obj.address);

        handleShow();
    }

   
    return(
        <>
        <div>
            <table className="table table-dark m-3">
                <thead>
                    <tr>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Change Status</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(x=>
                        <tr key={x.id}>
                            <td><button onClick={()=>showDataInForm(x)} className="btn btn-primary">Edit</button></td>
                            <td>
                                <Popconfirm
                                    title="Delete the task"
                                    description="Are you sure to delete this task?"
                                    onConfirm={() => deleteDealer(x.id)}
                                    onCancel={cancel}
                                    okText="Delete"
                                    cancelText="Cancel"
                                >
                                    <button className="btn btn-danger">Delete</button>
                                </Popconfirm>
                                
                            </td>
                            <td>{x.name}</td>
                            <td>{x.status}</td>
                            <td>
                               
                                    `if(x.status=='active'){
                                        <button>Inactive</button>
                                    }
                                    else{
                                        <button>active</button>
                                    }`

                                
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="modal-form" >
            <Modal show={show} onHide={handleClose} centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Contact Info</Modal.Title>
                </Modal.Header>
                    <Modal.Body >
                        <div className="container fs-4 ">
                            <form onSubmit={handleSubmit(onSubmit)} className="">
                                <div className="row ">

                                    <div className="col-md-6">
                                        <label>Name</label>
                                        <input type="text" className="form-control p-4 mb-3 fs-4" {...register('name')} />
                                    </div>

                                    <div className="col-md-6">
                                        <label>Email</label>
                                        <input type="email" className="form-control p-4 fs-4 mb-3" {...register('email')} />
                                    </div>

                                    <div className="col-md-6">
                                        <label>Password</label>
                                        <input type="password" className="form-control p-4 fs-4 mb-3" {...register('password')} />
                                    </div>

                                    <div className="col-md-6">
                                        <label>Adhar Card</label>
                                        <input type="number" className="form-control p-4 fs-4 mb-3" {...register('adhar')} />
                                    </div>

                                    <div className="col-md-6">
                                        <label>Pan Card</label>
                                        <input type="text" className="form-control p-4 fs-4 mb-3" {...register('pan')} />
                                    </div>

                                    <div className="col-md-6">
                                        <label>Mobile</label>
                                        <input type="tel" className="form-control p-4 fs-4 mb-3" {...register('mobile')} />
                                    </div>

                                    <div className="col-md-6">
                                        <label>Gender</label>
                                        <select className="form-select p-2 fs-4 mb-3" {...register('gender')}>
                                            <option value="">--Select Gender--</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </div>



                                    <div className="col-md-6">
                                        <label>City</label>
                                        <input type="text" className="form-control p-4 fs-4 mb-3" {...register('city')} />
                                    </div>

                                    <div className="col-md-6">
                                        <label>Status</label>
                                        <input type="text" defaultValue="inactive" className="form-control p-4 fs-4 mb-3" {...register('status')} />
                                    </div>

                                    <div className="col-md-6">
                                        <label>Photo</label>
                                        <input type="file" className="form-control fs-4  mb-3" style={{ height: "50px" }} {...register('photo')} />
                                    </div>

                                    <div className="col-md-12 col-2">
                                        <label>Address</label>
                                        <textarea type="address" style={{ height: "100px" }} className="form-control p-4 fs-4 mb-3" {...register('address')}></textarea>
                                    </div>

                                </div>
                                <button className=" p-2  btn btn-primary btn-lg fs-3 ">Submit</button>
                            </form>
                        </div>
                    </Modal.Body>

            </Modal>
            </div>

        </div>

        </>
    )
}
export default ManageDealer;