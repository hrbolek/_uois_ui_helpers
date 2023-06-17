import { useState } from "react"
import { UserSelectInteractive } from "./UserSelectInteractive"
import {actions } from "../utils/store"
import { UserAsyncSelectInput } from "./UserAsyncSelectInput"

export const HomeRadio = (props) => {
    const [selectedOption, setSelectedOption] = useState("show")

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value)
    }


    return (
        <div className="container">
            <h2>Vyber akci</h2>
                <input
                    type="radio"
                    className="form-check-input"
                    id="show"
                    value="show"
                    checked={selectedOption === "show"}
                    onChange={handleOptionChange}
                />
                <label className="form-check-label" htmlFor="show">
                Zobraz úkoly
                </label>
                
                <span style={{"marginRight":"10px"}} />
                <label className="form-check-label" htmlFor="edit">
                 Edituj úkoly
                </label>
                <input
                    type="radio"
                    className="form-check-input"
                    id="edit"
                    value="edit"
                    checked={selectedOption === "edit"}
                    onChange={handleOptionChange}
                    />
                    {selectedOption === "show" && <UserSelectInteractive actions={actions}/>}
        </div>
    )
    //{selectedOption === "show" && <UserAsyncSelectInput actions={actions}/>}
    
}