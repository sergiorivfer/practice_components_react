

export const FourComponent = () => {

    const handleClicked = (e, name) => {
        alert("has hecho clic" + name);
    }

    const handleDoubleClicked = () =>{
        alert("has hecho doble click");
    }

    const handleMouseEnter = (e) => {
        alert("has entrado a la caja");
    }

    const handleMouseLeave = (e) => {
        alert("has salido a la caja");
    }

    const handlemouse = (e,action) => {
        alert(`has ${action} la caja`);
    }

    const handleInsideInput = (e) => {
        console.log("estas dentro del input");
    }

    const handleOutsideInput = (e) => {
        console.log("estas fuera del input");
    }

  return (
    <div>
        <h1>FourComponent</h1>
        {/* Evento click */}
        <button className='btn btn-danger'
        onClick={()=>{
            alert("Hola soy un evento click");
        }}
        > Haz Click !!
        </button>
        <button className="btn btn-success mx-2" onClick={e=> handleClicked (e, "desafio")}>
            aqui tambien haz click
        </button>
        <button className="btn btn-warning"
            onDoubleClick={handleDoubleClicked}
        >
            Haz doble click
        </button>
        <div id="box1"
            onMouseEnter={e => handleMouseEnter(e, "entrando a")}

            onMouseLeave={e => handleMouseLeave(e, "salido a")}
        >
            <p>pasa el mouse encima¡¡</p>
        </div>

        <div id="box2" className="mt-4"
            onMouseEnter={ e => handlemouse (e, "entradoa")}

            onMouseLeave={ e => handlemouse(e, "entradoa")}
            >
        </div>
        <div className="mt-4">
            <input type="text" 
                onFocus={e => handleInsideInput(e)}
                onBlur={e => handleOutsideInput(e)}
            />
        </div>

    </div>
  )
}
