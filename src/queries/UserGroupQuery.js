import { authorizedFetch } from '../queries/authorizedFetch'

/**
 * Funkce vytvářející JSON string dotaz
 *  
 */
export const UserSelectQueryJSON = () => ({
    "query":
        `{
          userPage {
            id
            name
            tasks {
              id
              name
              briefDesc
              detailedDesc
              reference
              dateOfEntry
              dateOfSubmission
              dateOfFulfillment
            }
            studyPrograms {
              id
            }
            email
          }
        }`
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 */

export const UserSelectQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(UserSelectQueryJSON()),
    })