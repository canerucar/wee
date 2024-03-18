import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setWorkers } from '../stores/workersSlice';

const Request = ({ url }) => {
  const dispatch = useDispatch();

  const fetchData = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dispatch(setWorkers(data));
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return null;
};

export default Request;