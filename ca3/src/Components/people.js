import React, { useState, useEffect } from "react";
import {listpeople} from "../settings";
import JSONPretty from 'react-json-pretty';

const People = () => {
  const [hasError, setErrors] = useState(false);
  const [people, setPeople] = useState({});

  async function fetchData() {
    const res = await fetch(listpeople);
    res
      .json()
      .then(res => setPeople(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>Fetched User</p>
       <span>Name
         <JSONPretty id="json-pretty" data={people.name}></JSONPretty>
         </span>
      <br/>
      <span>Address of user<JSONPretty id="json-pretty" data={people.address}></JSONPretty>}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default People;