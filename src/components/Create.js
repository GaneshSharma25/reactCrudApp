import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Create() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://649819059543ce0f49e1a6dd.mockapi.io/crud',
            {
                e_name: name,
                e_age: age,
                e_email: email
            }
        ).then(() => {
            navigate('/');
        }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='bg-primary p-4 text-center'>
                        <h1>Create Data</h1>
                    </div>
                    <div className='mb-2 mt-2'>
                        <Link to='/'>
                            <button className='btn btn-primary'>Read Data</button>
                        </Link>
                    </div>
                    <form onSubmit={handleSubmit} action="">
                        <div className='form-group'>
                            <label>Enter Name: </label>
                            <input type="text" placeholder='Name' className='form-control' onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Enter Age: </label>
                            <input type="number" placeholder='age' className='form-control' onChange={(e) => setAge(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Enter email: </label>
                            <input type="email" placeholder='email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <br />
                        <div className='d-grid'>
                            <input type="submit" value='Submit' className='btn btn-primary' />
                        </div>
                    </form>

                    {name}
                    <br />
                    {age}
                    <br />
                    {email}
                </div>
            </div>
        </>
    )
}

export default Create