

export const TaskShortDescriptionInput = ({setShortTaskDescription}) => {
    const handleChange = (event) => {
      setShortTaskDescription(event.target.value)
    }
  
    return (
        
          <div className="form-group">
            <small className="form-text text-muted">Zadejte {name}</small>
            <input type="text" className="form-control"  placeholder="stručný popis úkolu" onChange={handleChange}/>
          </div>
    
    )
  }
