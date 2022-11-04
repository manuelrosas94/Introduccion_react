import React from "react";
import './CreateTodoButton.css';

function CreateTodoButtom(props){
    const onCLickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }

    return(
        <button 
        className="CreateTodoButton"
        onClick={onCLickButton}
        >
          +
        </button>
    );
}

export { CreateTodoButtom };