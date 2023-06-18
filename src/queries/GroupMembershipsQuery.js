import { authorizedFetch } from "fetches/authorizedFetch";


const GroupMembershipsQueryJSON = (groupId) => ({
    "query":
        `query ($id: ID!) {
            groupById (id: $id) {
                id
                memberships {
                    user {
                        id
                    }
                }
            }   
    }`,
  "variables": {"id": groupId}
})


export const GroupMembershipsQuery = (groupId) => 
    authorizedFetch('/gql', {
        body: JSON.stringify(GroupMembershipsQueryJSON(groupId)),
    })