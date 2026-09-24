import React, {useState} from "react";

export default function App(){
    const [taskText, setTaskText] = useState("");
    const [priority, setPriority] = useState("");


    return(
        <div className="w-full min-h-screen bg-gradient-to-r from-[#667db6] via-[#0082c8] to-[#667db6] p-2.5 flex justify-center items-center">
            <div className="bg-white w-full max-w-150 rounded-2xl p-5">
                <h1 className="text-2xl font-bold mb-2">To-Do List</h1>

                <div className="w-full pt-2.5 flex justify-between gap-2.5">
                    <input
                        type="text"
                        value={taskText}
                        onChange={e => setTaskText(e.target.value)}
                        onKeyDown={e => e.key === "Enter" && addTask()}
                        placeholder="Enter Task"
                        className="flex-1 rounded-lg p-2 border-2 border-black outline-none"
                    />

                    <select
                        value={priority}
                        onChange={e => setPriority(e.target.value)}
                        className="border-2 border-black rounded-lg p-1"
                    >
                        <option value="high">High Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="low">Low Priority</option>
                    </select>

                    <button
                        className="w-full max-w-22 rounded-lg border-none bg-orange-400 cursor-pointer"
                    >
                        Add Task
                    </button>
                </div>
            </div>
        </div>
    )
}