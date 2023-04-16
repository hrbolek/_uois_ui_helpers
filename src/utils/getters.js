import { Assignments, StudyGroups } from "../stories/DataStructures";


// returns array of assignments of given study_group_id
export function assignmentsFromGroup(study_group_id) {
    const study_groups = StudyGroups.all
    const assignments_ids = study_groups.find(
        element => (element.id === study_group_id)).assignments

    return (
        Assignments.all.filter(iter_assignment => assignments_ids.includes(iter_assignment.id))
    )
}