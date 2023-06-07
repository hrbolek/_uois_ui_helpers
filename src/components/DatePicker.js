export const DatePicker= (props)=>{
  return (
    <form>
  <label>
    Datum odevzdání:
    <input type="date" name="party" min="2017-04-01" max="2025-04-30" />
  </label>
</form>
  )
}