import React, {Component} from 'react';
import {BiEdit} from "react-icons/bi";
import { MdDelete } from "react-icons/md";

class ContMan extends Component{
    render(){
        return(
            <div className='container content-managment'>
                <div>Title 1</div>
                <div>
                    <button className='btn btn-success'>Edit <BiEdit/></button>
                    <button className='btn btn-danger'>Delete <MdDelete /></button>
                </div>
            </div>
        )
    }
}
export default ContMan;