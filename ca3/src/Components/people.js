import React, { useState, useEffect } from "react";
import {listpeople} from "../settings";

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
      <span>{JSON.stringify(people.name)}</span>
      <br/>
      <span>{JSON.stringify(people.height)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default People;