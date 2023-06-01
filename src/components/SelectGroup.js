


export const SelectGroup = ({groups}) => {
    const [selectedTasks, setSelectedGroup] = useState();
    const handleSelectChange = (selected) => {
        const selected_group = groups.find(group => {
            return group.id === selected.value;
          });
          const all_tasks = selected_group.tasks
          setsetselectedTasks(all_tasks)
      };

    const options = users.map(user => ({label: user.name, value: user.id}))
    const new_options = createColumns(options, 3)

    return (
        <div>
            Vyber studenta, jehož úkoly hledáš!
            <ReactSelect options={options} onChange={handleSelectChange} placeholder="Vyber studenta"/>
            {
                setselectedTasks &&
                (
                <div>
                    {
                        setselectedTasks.map((task) => (
                        <AssignmentsCard {...task} />))
                    }
                </div>
                )     
            }
        </div>
    )
}