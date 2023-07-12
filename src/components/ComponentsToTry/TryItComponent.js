import { TextInput } from "components/TextInput";
import { useState } from "react"
/*export const TryItComponent = () => {
    return (
        <div>

            <label for="username">Username: (3-16 characters)</label>
            <input name="username" type="text" value="Sasha" pattern="\w{3,16}" required/>
        
            <label for="pin">PIN: (4 digits)</label>
            <input name="pin" type="password" pattern="\d{4,4}" required/>
        </div>
        )
};*/
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


