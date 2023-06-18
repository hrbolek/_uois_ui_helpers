import { authorizedFetch } from "fetches/authorizedFetch";



const PartGroupsQueryJSON = (letters) => ({
    "query":
        `query ($letters: String!) {
            groupByLetters (letters: $letters) {
                id
                name
            }
    }`,
    "variables": {"letters": letters}
})

export const PartGroupsQuery = (letters) => 
authorizedFetch('/gql', {
    body: JSON.stringify(PartGroupsQueryJSON(letters)),
})