


export function comparator_task(task1, task2) {
    return task1.name == task2.name && task1.briefDesc==task2.briefDesc &&
         task1.detailedDesc ==task2.detailedDesc && task1.reference ==task2.reference &&
         task1.dateOfSubmission==task2.dateOfSubmission &&task1.dateOfFulfillment ==task1.dateOfFulfillment
}

