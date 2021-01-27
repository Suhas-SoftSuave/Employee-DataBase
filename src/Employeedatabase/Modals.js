
import Modal from 'react-modal';





function Modals(props) {





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
    function adddata() {
        if (props.seth === "Employee") {
            props.paef()

        }
        if (props.seth === "Staff") {
            props.pasf()
        }

    }
    function addName(name) {

        if (props.seth === "Employee") {
            props.paen(name)
        }
        if (props.seth === "Staff") {
            props.pasn(name)
        }
    }
    function addPhone(number) {
        if (props.seth === "Employee") {
            props.paep(number)
        }
        if (props.seth === "Staff") {
            props.pasp(number)
        }
    }




    //end of react modal of emp
    return (
        <div>
            <Modal
                isOpen={props.setM}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>Enter New {props.seth}</h2>
                <div>
                    <label>Enter name:<input type="text" onChange={(event) => {addName(event.target.value)}}  ></input><br></br>
                       Enter phone:<input type="number" onChange={(event) => { addPhone(event.target.value) }} ></input></label><br></br>
                    <button style={{ marginTop: '10px' }} onClick={() => { adddata(); props.clsM() }}>submit</button>
                    <button style={{ mariginTop: '10px' }} onClick={() => { props.clsM() }}>Close</button>
                </div>
            </Modal>
        </div>
    )
}
export default Modals