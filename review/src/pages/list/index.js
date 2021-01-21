import React, { useState, useEffect } from 'react';
import Exercise from 'comps/Exercise';
import Send from 'comps/Send';

import axios from 'axios';

const List = () => {

  const [info, setInfo] = useState([]);

  useEffect(() => {
    GetInfo();
  }, [])

  const HandleFormComplete = async (name, reps, cal) => {
    var resp = await axios.post("https://advdyn2021.herokuapp.com/createexercise", { name: name, reps: reps, calories: cal })
    GetInfo()
  }
  const GetInfo = async (exercise, reps, cal) => {
    console.log(exercise, reps, cal)
    var resp = await axios.get("https://advdyn2021.herokuapp.com/allexercises")
    setInfo(resp.data)
    console.log(resp)
  }

  return <div className="list">
    <Send
      onFormComplete={HandleFormComplete}
    />
    <div className="sub">Exercise List</div>
    {info.map((o, i) => <Exercise
      name={o.exercise}
      reps={o.reps}
      calories={o.cal}
    />)}
  </div>
}

export default List;