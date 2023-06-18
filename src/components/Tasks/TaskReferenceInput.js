

export const TaskReferenceInput = ({name, setTaskReference}) => {
    const handleChange = (event) => {
      setTaskReference(event.target.value)
    }
  
    return (
        
          <div className="form-group">
            <small className="form-text text-muted">Zadejte {name}</small>
            <input type="text" className="form-control"  placeholder="odkaz na stránku" onChange={handleChange}/>
          </div>
    
    )
  }
  