import {  useState } from "react";
import { dept } from './data'
import EmployeeTable from "./EmployeeTable";
import './DepartmentList.css';

import Modal from 'react-modal';



function DepartmentList(props) {

  const [Setbutton, setbutton] = useState(false)
  const [depid, setdepid] = useState()
  const [deptname, setdept] = useState(dept)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newdeptname,setnewdeptname]=useState()

  
  

  var subtitle;//subtitle

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };




  function changeItbutton() {

    if (!Setbutton) {
      setbutton(true)
    }
  }

  //react modal start
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    
  }

  function closeModal() {
    setIsOpen(false);
  }

  //close of react modal
    function setNewName(name){
      if(name!==""){
      setnewdeptname(name)
      }
      
    }
    function addDepartment() {

      const newname = newdeptname
      const newid = deptname.length + 2  ;
      setdept([...deptname, { id: newid, name: newname }])
      setnewdeptname()
    }

    //somecompare method

    function someCompare(n){
      
      
      if(n){
        setNewName(n)
      }
      else{
        alert('name should not be empty')
      }
    }


    return (

      <div className="Department">
        <div className="JustDepartments">
          
          
          <h1>Departments</h1>
          <button onClick={props.goback} >Goback</button>
          <button type="button" onClick={() => { openModal() }}>AddDepartment</button>
          <div>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >

              <h2 ref={_subtitle => (subtitle = _subtitle)}>Enter New Dept</h2>
              <div>
              <label>Enter Dept name:<input type="text" onChange={(event)=>{someCompare(event.target.value)}}></input></label><br></br>
              <button style={{marginTop:'10px'}} onClick={()=>{
                if(newdeptname){addDepartment();closeModal();}else{alert("enter name")}
                }}>submit</button>
              <button style={{marginTop:'10px'}} onClick={()=>{closeModal();}}>Close</button>
              </div>
             
              
            </Modal>
          </div>
          {deptname.map((dept) => (
            <div>
              <button type="button" onClick={() => { setdepid(dept.id); changeItbutton() }} >{dept.name}</button>
            </div>
          ))}
        </div>
        <div >
          {Setbutton && <EmployeeTable admin={props.admin} empdepid={depid}></EmployeeTable>}
        </div>
      </div>
    );
  }


  export default DepartmentList;