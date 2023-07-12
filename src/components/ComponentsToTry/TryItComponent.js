import { TextInput } from "components/TextInput";
import { useState } from "react"

export const TryItComponent = () => {
    const [isShown, setIsShown] = useState(false)

    const handleChange = (event) =>{
      const ObsahTextInputu = event.target.value
      setIsShown(ObsahTextInputu)
    }

    return (
        <form>
  <div>
    <TextInput
    placeholder = "vpište písmenko"
    value = {null}
    onChange = {handleChange}/>

    {<label>{isShown}</label>}
            
    <button>Search</button>
  </div>
</form>

 )
};

/*input
      type="search"
      id="mySearch"
      name="q"
      placeholder="Search the name..." 
      aria-label="Search through site content" onChange={handleChange} />  */


