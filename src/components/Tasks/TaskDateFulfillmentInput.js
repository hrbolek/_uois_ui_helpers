//creating a calendar
export const TaskDateFulfillmentInput = ({name, onDateofFulfillmentChange})=> {
  const handleDateChanged = (event) => {
    onDateofFulfillmentChange(event.target.value)
  }

    const today = new Date()
    const minDate = new Date();
    const maxDate = new Date()

    minDate.setFullYear(today.getFullYear() - 1);
    maxDate.setFullYear(today.getFullYear() + 5)

    return (
        <form>
          <label>
            <div>
              {name}
            </div>
            <input type="date" min={minDate} max={maxDate} onChange={handleDateChanged}/>
          </label>
        </form>
    )
}