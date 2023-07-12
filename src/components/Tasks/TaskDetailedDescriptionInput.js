

export const TaskDetailedDescriptionInput = ({name, onDetailedDescChange}) => {
    const handleChange = (event) => {
      onDetailedDescChange(event.target.value)
    }
  
    return (
        
          <div className="form-group">
            <small className="form-text text-muted">Zadejte {name}</small>
            <input type="text" className="form-control"  placeholder="úplný popis úkolu" onChange={handleChange}/>
          </div>
    
    )
  }
