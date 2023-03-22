import Card from "react-bootstrap/Card";

import { Tree, TreeNode } from 'react-organizational-chart';
import { GroupLink } from "./Links";


const GroupBox = ({group, colormapper}) =>
    <div style={{'backgroundColor': colormapper(group), 'border': '1px solid black', 'padding': '5px'}}>
        <GroupLink group={group} />
    </div>

const createMaster = (group) => {
    const mastergroup = group.mastergroup
    if (mastergroup) {
        const MasterComponent = createMaster(mastergroup)
        return ({children, colormapper}) => (
            <MasterComponent colormapper={colormapper}>
                <TreeNode label={<GroupBox group={group} colormapper={colormapper}/>}>
                    {children}
                </TreeNode>
            </MasterComponent>
        )
    } else {
        return ({children, colormapper}) => (
            <Tree label={<GroupBox group={group} colormapper={colormapper}/>}>
                {children}
            </Tree>
        )
    }
}

const Masters = ({group, children, colormapper}) => {
    const MasterComponent = createMaster(group)
    return (
        <MasterComponent colormapper={colormapper}>
            {children}
        </MasterComponent>
    )
}

const BuildTree = ({group, colormapper}) => {
    const subgroups = group.subgroups || []
    const validSubgroups = subgroups.filter(g => validator(g))
    const children = validSubgroups.map( g => <BuildTree key={g.id} group={g} validator={validator} colormapper={colormapper}/>)
    return(
        <TreeNode label={<GroupBox group={group} colormapper={colormapper}/>}>
            {children}
        </TreeNode>
    )
}

export const GroupSchema = ({group, validator, colormapper}) => {
    const subgroups = group.subgroups || []
    const validSubgroups = subgroups.filter(g => validator(g))
    const children = validSubgroups.map( g => <BuildTree key={g.id} group={g} validator={validator} colormapper={colormapper}/>)
    return (
        <Masters group={group} colormapper={colormapper}>
            {children}
        </Masters>
    )
}