



export const DescriptionInput = (props) => {

    return (
        <div class="form-group">
        <label for="exampleFormControlTextarea1">{props.name}</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    )
}