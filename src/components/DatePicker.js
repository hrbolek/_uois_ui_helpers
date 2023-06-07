export const DatePicker= (props)=>{
  const today = new Date()
  const minDate = new Date();
  const maxDate = new Date()

  minDate.setFullYear(today.getFullYear() - 1);
  maxDate.setFullYear(today.getFullYear() + 5)

  return (
    <form>
  <label>
    <div>
    {props.name}
    </div>
    <input type="date" min={minDate} max={maxDate} />

  </label>
</form>
  )
}