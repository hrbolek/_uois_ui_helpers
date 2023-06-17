import { Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { assignmentsFromGroup } from '../utils/getters';
import { AssignmentsCard } from './Tasks/TaskRow';

import { ShowButton } from './ShowButton';
import { MultipleCards } from './Tasks/TasksTable';

const textStyle = {
    color: "green",
    lineHeight: 0,
    padding: '0',

 }

export const StudyGroupCard = ({name, id}) => {
    const assignments = assignmentsFromGroup(id)
    
    const button_args = {
        hideMessage: "Zobrazit úkoly",
        showMessage: "Skrýt úkoly",
        component: <MultipleCards array={assignments}/>
    }

    return (
        <Card border="info" style={{textAlign:"center" }}>
            <Card.Title>
                {name}
            </Card.Title>

            <Card.Body>
                <Card.Text style={textStyle}>
                        počet úkolů: {assignments.length}
                </Card.Text>
            </Card.Body>
            
            <ShowButton {...button_args}/>
        </Card>
    )
}