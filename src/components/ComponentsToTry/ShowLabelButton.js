import { useState } from "react"
import { Button } from "react-bootstrap"

export const ShowLabelButton = () => {
    const [isShown, setIsShown] = useState(false)

    const buttonClick = () => {
        setIsShown(true)
    }

    return (
        <div>
            <Button variant="primary" onClick={buttonClick}>Click me to show label</Button>
            {isShown && <label>tu se neco ukaze</label>}
            
        </div>        
    

    )
}