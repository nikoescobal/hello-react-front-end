import { useSelector, useDispatch } from 'react-redux';

import { getRandomMsg } from '../redux/dataReducer';

export default function Message() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.dataReducer.msg);
  return (
    <div>
      <button
        type="button"
        className="getMessageBtn"
        onClick={() => dispatch(getRandomMsg())}
      >
        {' '}
        Get Random Message
      </button>
      <h2>
        The Message from store is &nbsp;
        {message.text}
        .
      </h2>
    </div>
  );
}
