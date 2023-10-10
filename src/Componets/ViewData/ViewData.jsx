import { React } from 'react'
import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { deleteuser, singleuser } from '../../Services/Action/action';



function ViewData() {



    const navigate = useNavigate();
    const dispatch = useDispatch();
    const Allstudnts = useSelector(state => state.StudentsReducer.Students)
    // console.log(Allstudnts);

    const handleEdit = (id, data, index) => {
        navigate(`/edit/${id}`);
        dispatch(singleuser(data, index));
    }

    const handleDelete = (id) => {

        dispatch(deleteuser(id));

    }
    return (

        <>
            <Container>

                <button className='btn btn-success my-3'>
                    <Link to="/" className='text-decoration-none text-white '>Add Student</Link>
                </button>

                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Contact</th>
                            <th>cource</th>
                            <th>Gender</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Allstudnts.map((data,index) => {
                                return(
                                    <>
                                    <tr>
                                        <td>{
                                            data.id
                                        }</td>
                                        <td>
                                            {
                                                data.fname + ' ' + data.lname
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.email
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.password
                                            }
                                        </td>

                                        <td>{
                                            data.contact
                                        }</td>
                                        <td>
                                            {
                                                data.cource
                                            }
                                        </td>
                                        <td>
                                            {
                                                data.gender
                                            }
                                        </td>
                                        <td>
                                            <button className='btn btn-primary mx-2' onClick={() => handleEdit(data.id, data, index)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => handleDelete(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                </>
                                )
                            })
                        }
                    </tbody>
                </Table>



            </Container>
        </>
    )

}

export default ViewData