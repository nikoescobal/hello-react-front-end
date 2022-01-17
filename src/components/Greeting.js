import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getRandomMsg, getRandomMsgSuccess } from "../redux/dataReducer";

export default function Message(props) {
  const { msg } = props;
  const dispatch = useDispatch();
  const message = useSelector((state) => state.dataReducer);
  console.log(message);
  return (
    <div>
      <button
        className='getMessageBtn'
        onClick={() => dispatch(getRandomMsg())}
      >
        {" "}
        Get Random Message
      </button>
      <h2>The Message from store is {message.text}.</h2>
    </div>
  );
}
