



export const DescriptionInput = ({name, setTaskAtribute}) => {
    const handleChange = (event) => {
        setTaskAtribute(event.target.value)
      }
    return (
        <div class="form-group">
        <small className="form-text text-muted">Zadejte {name}</small>
        <textarea class="form-control" id="exampleFormControlTextarea1"
                rows="2" placeholder="úplný popis úkolu" onChange={handleChange}></textarea>
      </div>
    )
}