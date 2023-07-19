import React from "react";
import { useState } from "react";

const ToDo = () => {
    const [taskArr, settaskArr] = useState([]);
    const [task, setTask] = useState("");
    const [inpVal, setInput] = useState("");

    return (
        <div>
            <input
                type="text"
                value={inpVal}
                onChange={(e) => {
                    setInput(e.target.value);
                    setTask(e.target.value);
                }}
            />

            <button
                onClick={() => {
                    if (inpVal.trim()) {
                        settaskArr([...taskArr, task]);
                        setInput("");
                    }
                }}
            >
                Add Todo
            </button>

            {
                taskArr.map((elm, i) => (
                    <ul key={i}>
                        <li>
                            {elm}
                            <button
                                onClick={() => {
                                    console.log(i)
                                    taskArr.splice(i, 1);
                                    settaskArr([...taskArr]);
                                }}
                            > Delete</button>
                        </li>
                    </ul>
                ))}
        </div>
    );
};
export default ToDo;