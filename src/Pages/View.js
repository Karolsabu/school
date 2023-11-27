import React, { useEffect, useState } from 'react'
import "./View.css"
import Table from 'react-bootstrap/Table';
import { studentgetdata } from '../Services/Allapis';
function View() {
  const [viewdata, setviewdata] = useState([])

  const getdata = async () => {
    const result = await studentgetdata()
    setviewdata(result.data);
  }
  useEffect(() => {
    getdata()
  }, []
  )
  console.log(viewdata);
  return (
    // 
    <div className='view_detail'>
      <h1 className='mb-4'>Admission details</h1>
      <div className='view_table'>
        <Table striped bordered responsive hover variant="dark" className=''>
          <thead >
            <tr>
              <th>#</th>
              <th>Pupil</th>
              <th> Name of Guardian and his relation</th>
              <th>Gender</th>
              <th>Occupation of Guardian</th>
              <th>Phone</th>
              <th>Residential Address</th>
              <th>Name of Previous School</th>
              <th>Standard when leaving</th>
              <th>TC Date</th>
              <th>Date of Birth</th>
              <th>Place</th>
              <th>Nationality</th>

            </tr>
          </thead>
          <tbody style={{ color: "black" }}>
            {viewdata.length > 0 ? viewdata.map((i,index) => (
              <tr>
                <td>{index+1}</td>
                <td>{i.pupil}</td>
                <td>{i.grdin}</td>
                <td>{i.gender}</td>
                <td>{i.occupation}</td>
                <td>{i.phone}</td>
                <td>{i.address}</td>
                <td>{i.prevschool}</td>
                <td>{i.std}</td>
                <td>{i.tcdate}</td>
                <td>{i.dob}</td>
                <td>{i.place}</td>
                <td>{i.nationality}</td>
              </tr>
            )) : <h1>No data available</h1>}


          </tbody>
        </Table>

      </div>
    </div>
  );

}

export default View