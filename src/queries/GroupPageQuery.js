import { authorizedFetch } from './authorizedFetch'

/**
 * Funkce
 *  
 */
export const GroupPageQueryJSON = () => ({
    "query":
        `{
          groupPage {
            id
            name
            memberships {
              user {
                id
              }
            }
          }
        }`
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 */

export const GroupPageQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(GroupPageQueryJSON()),
    })