import React, { useState, useEffect } from "react";
import {listplanets} from "../settings";

const Planets = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  async function fetchData() {
    const res = await fetch(listplanets);
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <span>number of planets :{JSON.stringify(planets.count)}</span>
      <br/>
      <span>name of planet :{JSON.stringify(planets.name)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default Planets;