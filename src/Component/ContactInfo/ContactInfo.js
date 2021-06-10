import React, { useState } from 'react';
/* import axiosInstance from '../../axios-instance'; */
import './contactInfo.css';
const ContactInfo=()=>{

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [textData,setTextData]=useState('');
    const onNameInput=(event)=>{ 
        let tempName=event.target.value;
        setName(tempName);
    }
    const onEmailInput=(event)=>{
        let tempEmail=event.target.value
        setEmail(tempEmail);
    }
    const onTextInput=(event)=>{
        let tempTextData=event.target.value;
        setTextData(tempTextData);
    }
    const sendResponseToServer=()=>{
        const response={
            from:name,
            emailId:email,
            text:textData
        }
       /*  axiosInstance.post('/response.json',response)
        .catch(err=>{
            console.log(err)
        }) */
        console.log(response);
        setName('');
        setEmail('');
        setTextData('');
    }
    return(
        <div className='infoMainContainer' >
            <div className='sendMessage' >
                <h3>Send A Message</h3>
                <div>
                    <div>
                        <input onChange={onNameInput} value={name} placeholder='Full Name' type='text' />
                    </div>
                    <div>
                        <input onChange={onEmailInput}  placeholder='Email' value={email} type='text' />
                    </div>
                    <div>
                        <textarea onChange={onTextInput} value={textData} placeholder='Type here ...'    type='text' />
                    </div>
                    <div className='Button' > <div className='btn' onClick={sendResponseToServer} >Send</div> </div>
                </div>
            </div>
            <div  className='contactInfo' >
               <h3>Find Us</h3>
               <div className='contactContainer' >
                    <div  >
                        <h4>Email</h4>
                        <div className='informationContainer' >squad.area69@gmail.com</div>
                    </div>
                    <div>
                        <h4>Address</h4>
                        <div  className='informationContainer' >404! not found</div>
                    </div>
                    <div>
                    <h4>Phone</h4>
                    <div  className='informationContainer' >01794149943,01600290733</div>
                </div>
                   
                </div>
            </div>
        </div>
    )
}
/* Email : squad.area69@gmail.com */
export default ContactInfo;