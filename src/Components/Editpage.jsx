import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IoDocumentTextOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateData } from '../Features/MainSlice';





const Editpage = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    
    const [dtitle,setDTitle] = useState('')
    const [dpara,setDPara] = useState('')
    const datas = useSelector((state)=>state.datas)

    useEffect(()=>{
    const existingData = datas.filter(data=>data.id == id) 
    console.log(existingData);
    const {title='',para=''} = existingData?.[0]
    setDTitle(title)
    setDPara(para)
    },[id])

    const dispatch = useDispatch()

    return (
        <div className='editpage'>
            <h1 className='edited'>Edit Note</h1>
            <div className='createedit container-fluid'>
                <Card.Body>
                    <Card.Title className='addnote'></Card.Title>
                    <div className='title'>
                        <Card.Title><input type='text' placeholder='Title'
                          name='dtittle'  value={dtitle} onChange={(e)=>{setDTitle(e.target.value)}}></input>
                        </Card.Title>
                    </div>

                    <Card.Text>
                        <textarea rows='4' type='text' className='text' placeholder='Take a note...'
                         name='dpara'   value={dpara} onChange={(e)=>{setDPara(e.target.value)}}>
                        </textarea>

                    </Card.Text>

                    <div>
                        <input type='datetime-local' className='date'></input>

                    </div>

                    <div>
                        <button onClick={(e) => {
                            e.preventDefault()
                            console.log(!dtitle||!dpara);
                            if(!dtitle||!dpara) return
                            dispatch(updateData({
                                id:id,
                                title:dtitle,
                                para:dpara
                            }))
                            navigate('/')

                        }}
                            className='addnotebtn1' type='submit'>
                            Save Changes
                        </button>
                    </div>

                </Card.Body>
            </div>


        </div>


    );
};


export default Editpage;