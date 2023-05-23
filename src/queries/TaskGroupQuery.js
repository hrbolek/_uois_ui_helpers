import { authorizedFetch } from '../queries/authorizedFetch'

/**
 * Funkce
 *  
 */
export const TaskSelectQueryJSON = () => ({
    "query":
        `{
          taskPage {
            id
            name
          }
        }`
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 */

export const TaskSelectQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(TaskSelectQueryJSON()),
    })