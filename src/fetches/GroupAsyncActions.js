import { GroupPageQuery } from "queries/GroupPageQuery"
import { GroupActions } from "reducers/GroupReducers"
import { PartGroupsQuery } from "queries/PartGroupsQuery"
import { GroupMembershipsQuery } from "queries/GroupMembershipsQuery"

const GroupsFetchHelper = (query, resultSelector, dispatch, getState) => {
    const p = query()
        .then(
            response => response.json()
        )
        .then(
            json => resultSelector(json)
        )
        .then(
            json => dispatch(GroupActions.loadFromServer(json))
        )
    return p
}

export const GroupsFetch = () => (dispatch, getState) => {
    const groupsSelector = (json) => json.data.groupPage
    const bodyFunc = async () => {
        const groupsData = await GroupsFetchHelper(GroupPageQuery, groupsSelector, dispatch, getState)
        return groupsData
    }
    return bodyFunc()
}


const PartGroupsFetchHelper = (letters, query, resultSelector, dispatch, getState) => {
    const result = query(letters)
        .then(
            response => response.json()
        )
        .then(
            json => resultSelector(json)
        )
        .then(
            json => dispatch(GroupActions.partGroupsInsert(json))
        )
    return result
}

export const PartGroupsFetch = (letters) => (dispatch, getState) => {
    const partGroupsSelector = (json) => json.data.groupByLetters
    const bodyFunc = async () => {
        const partGroupsData = await PartGroupsFetchHelper(letters, PartGroupsQuery, partGroupsSelector, dispatch, getState)
        return partGroupsData
    }
    return bodyFunc()
}




const GroupMembershipsFetchHelper = (groupId, query, resultSelector, dispatch, getState) => {
    const result = query(groupId)
        .then(
            response => response.json()
        )
        .then(
            json => resultSelector(json)
        )
        .then(
            json => dispatch(GroupActions.updateGroup(json))
        )
    return result
}

export const GroupMembershipsFetch = (groupId) => (dispatch, getState) => {
    const groupByIdSelector = (json) => json.data.groupById
    const bodyFunc = async () => {
        const groupMembershipsData = await GroupMembershipsFetchHelper(groupId, GroupMembershipsQuery, groupByIdSelector, dispatch, getState)
        return groupMembershipsData
    }
    return bodyFunc()
}