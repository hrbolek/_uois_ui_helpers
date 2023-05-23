import { authorizedFetch } from '../queries/authorizedFetch'

/**
 * Funkce
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