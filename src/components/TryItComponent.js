import { useState } from "react"
import { Button } from "react-bootstrap"

export const TryItComponent = (props) => {
    const [someMessage, setMessage] = useState("")

    const makeClick = (event) => {
        setMessage(someMessage + "a")
    }
    return (
        <div>
            <Button onClick={makeClick}>click me</Button>
            {someMessage}
        </div>
    )

}