import React, { useRef} from 'react';
import { useDispatch } from 'react-redux';
import { addHobby } from '../store/reducers/hobbyReducer';

const Add = () => {
  const input = useRef();
  const dispatch = useDispatch();

  const add = () => {
    let x=input.current.value;
    dispatch(addHobby(x));
    input.current.value="";
  };

  return (
    <>
      <div className='container' style={{ alignContent: 'center' }}>
        <h1>Add Your Hobby</h1>
        <input
          type='text'
          ref={input}
        />
        <button className='btn btn-primary mx-2' onClick={add}>Add</button>
      </div>
    </>
  );
};

export default Add;
