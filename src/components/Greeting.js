import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getRandomMsg } from "../redux/dataReducer";

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRandomMsg());
  }, [dispatch]);

  const message = useSelector((state) => state.dataReducer.text);
  return (
    <div>
      <button className='getMessageBtn'> Get Random Message</button>
      <h2>The Message from store is {message}.</h2>
    </div>
  );
};

export default Greeting;
