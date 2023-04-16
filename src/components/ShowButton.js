import { useCallback, useState } from "react"
import { Button } from "react-bootstrap"



export const ShowButton = ({hideMessage, showMessage, component}) => {
    const [showComponent, setIsShown] = useState(0)

    const handleClick = (event) => {
        setIsShown(!showComponent)
    }

    
    if (showComponent) {
        return (
            <>
            <Button onClick={handleClick}>{showMessage}</Button>
            {component}
            </>
        )
    }
    return (
        <Button onClick={handleClick}>{hideMessage}</Button>
    )
}