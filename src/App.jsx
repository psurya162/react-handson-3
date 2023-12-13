import React, { useState } from 'react';
import Back from './Back';

const Handson = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    rating: '',
    data: []
  });
  const [click, setClick] = useState(true);

  const { name, department, rating, data } = formData;

  const handleClick = () => {
    const obj = { name, department, rating };
    const newData = [...data, obj];
    setFormData({ ...formData, data: newData, name: '', department: '', rating: '' });
    setClick(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const Toggle = () => {
    setClick(!click);
  };

  return (
    <>
      {click ? (
        <>
          <h1>EMPLOYEE FEEDBACK FORM</h1>
          <div className='mainContainer'>
            <label htmlFor="name">Name :</label>
            <input name="name" placeholder="Name" value={name} onChange={handleChange} />

            <label htmlFor="department">Department :</label>
            <input name="department" placeholder="Department" value={department} onChange={handleChange} />

            <label htmlFor="rating">Rating :</label>
            <input name="rating" placeholder="Rating" value={rating} onChange={handleChange} />

            <button onClick={handleClick}>Submit</button>
          </div>
        </>
      ) : (
        <Back value={data} toggle={Toggle} />
      )}
    </>
  );
};

export default Handson;
