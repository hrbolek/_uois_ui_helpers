import { useSelector } from "react-redux"
import { useEffect } from "react"
import { TasksTable } from "./TasksTable"
import { actions } from "utils/store"


export const GroupTasks = ({groupId, actions, groups}) => {
    useEffect(
        () => {
            //fetch memberships by groupId
            actions.groupMembershipsFetch(groupId)
        }, [groupId]
    )
    const memberships = groups[groupId]?.memberships
    return (
        <div>
            {memberships?.map(
                (m, index) => <TasksTable key={index} userId={m.user.id} actions={actions}/>
            )}
        </div>
    )
    

}