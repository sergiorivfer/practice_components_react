import React from 'react'

export const MyFirstComponents = () => {

  const name = " Sergio Rivera F";

  const github_profile = "https://github.com/sergiorivfer";

  const student = {
    name: "la cucha",
    last_name:"la fullstack",
    mobile: "3285674589",
    linkedin_profile: "https://www.linkedin.com/in/sergio-rivera-fern%C3%A1ndez-64b1b116b"

  };

  console3

  return (
    <>
    <div>MyFirstComponents</div>
    <div className="container bg-info-subtle mt-5 py-4 px-5">
    <h1> Temas de react</h1>
    <ul>
        <li>componentes</li>
        <li>Eventos</li>
        <li>estados Hoold</li>
        <li>Promps</li>
    </ul>
    </div>
    <div className="container bg-warning-subtle py-4 px-5">
    <h1> Datos del pelao</h1>
    <div>
    <p>es sergio y es lentin este es su GIT: { github_profile} </p>
    </div>
    </div>
    <div className="container bg-info-subtle  py-4 px-5">
    <h1> Datos de la cucha</h1>
    <div>
    <p>nombre:<strong>{student.name}</strong></p>
    <p>apellido:<strong>{student.last_name}</strong></p>
    <p>celular:<strong>{student.mobile}</strong></p>
    <p>linkedin:<strong><a href="https://www.linkedin.com/in/sergio-rivera-fern%C3%A1ndez-64b1b116b">{student.linkedin_profile}</a></strong></p>
    </div>
    <div className='container mt-4 mb-4'>
      <h1>Objeto completo</h1>
      <pre>{JSON.stringify(student)}</pre>
    </div>
    </div>
    </> //fragment 
  )
}
