



export const DescriptionInput = (props) => {

    return (
        <div class="form-group">
        <small className="form-text text-muted">Zadejte {props.name}</small>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
      </div>
    )
}