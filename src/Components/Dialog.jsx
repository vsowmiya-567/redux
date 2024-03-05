import React from 'react';

const Dialog = ({id,deletebyid}) => {
    return (
       
        <div style = {{marginLeft:"1000px",marginbottom:"200px",height:'90px',width:'250px',backgroundColor: '#e3eaf8'}}>
        <h3 style={{textAlign:'center',padding:'10px',color:'#203562'}}>Are you sure you want to delete?</h3>
        <button style={{height:'30px',width:'30px',marginLeft:'40px'}} onClick={()=>{deletebyid(id)}}>Yes</button>
        <button style={{height:'30px',width:'30px',marginLeft:'40px'}}>No</button>

 

            
        </div>
    );
};

export default Dialog;