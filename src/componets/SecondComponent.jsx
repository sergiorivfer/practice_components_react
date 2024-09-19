import React from 'react'

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

  return (
    <>
    <h1> second Component</h1>
    <div>
        {/* <ul>
            <li>{books [0]}</li>
            <li>{books [1]}</li>
            <li>{books [2]}</li>
            <li>{books [3]}</li>
            <li>{books [4]}</li>
            <li>{books [5]}</li>
            <li>{books [6]}</li>
        </ul> */}
        <ul>
            {
                books.map((book,index)=> {
                    return <li key={index} > {book}</li>
                })
            }
        </ul>

    </div>
    </>
  )
}
