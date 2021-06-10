import React, { useState } from 'react';
import StyledRadio from "./commons/StyledRadio.js";

export default function DiaryPage() {

    const [selected, setSelected] = useState("note");

    return (
        <div className="card m-20 m-l-0 m-r-0">
            <div className="card-body">
                <h6 className="card-title">I want to make a &nbsp;
                    <StyledRadio
                        value="note"
                        selected={selected}
                        text="Note"
                        onChange={setSelected}
                    />
                    <StyledRadio
                        value="todo"
                        selected={selected}
                        text="To-Do List"
                        onChange={setSelected}
                    />
                </h6>

                {
                    selected == 'note'
                    
                    ?

                    <div className="note-area">
                        <textarea className="form-control notes p-b-20" rows="6"></textarea>
                    </div>
                    
                    :
                    
                    <div className="todo-area">
                        <div className="form-control notes todos p-b-20" contentEditable="true" suppressContentEditableWarning={true}>
                            <ul>
                                <li>Start...</li>
                            </ul>
                        </div>
                    </div>
                }

                <div className="pull-right m-t-20">
                    <a href="#" className="btn btn-primary btn-sm">To save Login/Register</a>
                </div>
            </div>
        </div>
    )
}