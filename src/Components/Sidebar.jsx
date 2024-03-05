import React, { useContext, useState } from 'react';
import { IoDocumentTextOutline } from "react-icons/io5";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useNavigate } from 'react-router-dom';
import CardGroup from 'react-bootstrap/CardGroup';
import { CardBody, CardFooter, CardTitle } from 'react-bootstrap';
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addData, deleteData } from '../Features/MainSlice';



const Sidebar = () => {

    const dispatch = useDispatch()
    const datas = useSelector((state)=>state.datas)
    console.log(datas);

    const [id,setId]= useState(null)
    const [title,setTitle] = useState('')
    const [para,setPara] = useState('')


    const navigate = useNavigate()

    const initialValue = { id: null, title: '', para: '' }
    const [newData, SetNewData] = useState(initialValue)
    const [date,setDate] = useState()

   

    const handleSubmit = (e) => {
        // console.log(e);
        e.preventDefault();
        console.log(title,para);
        if (!title || !para) return;
        dispatch(addData({id:datas.length+1,title,para}))
        SetNewData(initialValue)
    }

    const handleDelete = (id)=>{
        dispatch(deleteData({id:id}))
    }

          
    return (
        <div className='sidebar'>
            <h1 className='notesapp'>Notes App</h1>
            <button className='notesbuttn'><span className='notesicon'><IoDocumentTextOutline /></span><span className='content'>Notes</span></button>

            <div className='create container-fluid'>
                <form onSubmit={handleSubmit}>
                    <Card.Body>
                        <Card.Title className='addnote'>Add a Note</Card.Title>
                        <div className='title'>
                            <Card.Title><input type='text' placeholder='Title' onChange={e=>setTitle(e.target.value)} ></input></Card.Title>
                        </div>
                        <Card.Text>
                            <textarea rows='4' type='text' className='text' placeholder='Take a note...' onChange={e=>setPara(e.target.value)}></textarea>
                        </Card.Text>

                        <div>
                            <input type='datetime-local' className='date' onChange={e=>setDate(e.target.value)}></input>

                        </div>

                        <div>
                            <button className='addnotebtn' type='submit'>Add Note</button>
                        </div>
                        <div className='mynote'>
                            <h2><span className='notesicon'><IoDocumentTextOutline /></span>My Notes</h2>
                        </div>
                        <h2 className='recent'>Recently viewed</h2>
                    </Card.Body>
                </form>
            </div>

            <div>
                <CardGroup className='cards'>
                    {datas.map((data,index) => {
                        return (
                            <div key={index}>
                                <Card className='card'>
                                    <CardBody>

                                        <CardTitle className='tit'>
                                         {/* edit button */}
                                            <span >{data.title}</span>
                                            
                                                <Link to={`/editpage/${data.id}`}  className='editbtn'>

                                               
                                                <span className='edit'>
                                                    <MdEdit />
                                                </span>
                                                </Link>

                                             {/* delete button */}
                                            <button onClick={() => { handleDelete(data.id) }}
                                                className='dltbtn'>
                                                <span className='delete'>
                                                    <FaTrashAlt />
                                                </span>
                                            </button>
                                        </CardTitle>
                                        <CardTitle className='para'>{data.para}</CardTitle>
                                    </CardBody>
                                    <CardFooter className='footer'>
                                        <small className="text-muted"> {date}</small>
                                    </CardFooter>
                                </Card>
                            </div>
                        )
                    })}
                </CardGroup>
            </div>
        </div>
    );
};

export default Sidebar;