import { authorizedFetch } from './authorizedFetch'

/**
 * Funkce
 *  
 */
export const TaskPageQueryJSON = () => ({
    "query":
        `{
          taskPage {
            id
            lastchange
            name
            briefDesc
            detailedDesc
            reference
            dateOfEntry
            dateOfSubmission
            dateOfFulfillment
            event {
              id
            }
            user {
              id
            }
          }
        }`
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 */

export const TaskPageQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(TaskPageQueryJSON()),
    })