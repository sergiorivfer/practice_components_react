

export const SecondComponent = () => {
 
    const books = [

        "libro 1",
        "libro 2",
        "libro 3",
        "libro 4",
        "libro 5",
        "libro 6",
        "libro 7",
        "libro 8",
        "libro 8",
        "libro 8",

    ];

    // condicion ? ( si_verdadero ) : ( si_falso )



    return (
        <>
          <h1>SecondComponent</h1>
          <div>
            <ul>
              
              {books.length >= 1 ?
              (
                  books.map((book, index) => {
                    return <li key={ index }> { book } </li>
                  })
              ) : 
              (
                <p>No existen libros </p>
              )}

            </ul>
          </div>
        </>
      )
}

export default SecondComponent
