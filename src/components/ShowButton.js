import { useCallback, useState } from "react"
import { Button } from "react-bootstrap"


//probably high order component - not modern react, could not find better workaround
//https://legacy.reactjs.org/docs/higher-order-components.html
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