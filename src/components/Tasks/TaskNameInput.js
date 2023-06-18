
export const TaskNameInput = ({name, setTaskName}) => {
    const handleChange = (event) => {
      setTaskName(event.target.value)
    }
  
    return (
        <form>
          <div className="form-group">
            <small className="form-text text-muted">Zadejte {name}</small>
            <input type="text" className="form-control"  placeholder="jméno úkolu" onChange={handleChange}/>
          </div>
        </form>
    )
  }