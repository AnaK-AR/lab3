import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    matricula: 'a07192068',
    nombre: 'Ana',
    apellidos: 'Aramoni Ruiz',
    edad: '22',
    universidad: 'Tec de Monterrey',
    carrera: 'ITC',
  });

  const { matricula, nombre, apellidos, edad, universidad, carrera } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('useEffect called!');
  }, []);

  useEffect(() => {
    // console.log('formState changed!');
  }, [formState]);

  useEffect(() => {
    // console.log('email changed!');
  }, [matricula]);

  return (
    <>
      <h1>Formulario Lab 3</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="A07192068"
        name="Matricula"
        value={matricula}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Ana"
        name="Nombre"
        value={nombre}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Aramoni Ruiz"
        name="Apellidos"
        value={apellidos}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="22"
        name="Edad"
        value={edad}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Tec de MTY"
        name="Universidad"
        value={universidad}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="ITC"
        name="Carrera"
        value={carrera}
        onChange={onInputChange}
      /> 
      {/*{matricula === 'a07192068' && <Message />*/}
      <button>Submit</button>
    </>

  );
};