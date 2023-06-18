import { authorizedFetch } from "../fetches/authorizedFetch"

export const PartUsersQueryJSON = (letters) => ({
    "query":
        `query ($letters: String!) {
            userByLetters (letters: $letters) {
                id
                name
                surname
                email
            }
      }`,
      "variables": {"letters": letters}
})

export const PartUsersQuery = (letters) => 
    authorizedFetch('/gql', {
        body: JSON.stringify(PartUsersQueryJSON(letters)),
    })
