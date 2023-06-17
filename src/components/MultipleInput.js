import React from "react";
import { DateInput } from "./DateInput";
import { WriteInput } from "./WriteInput";
import { DescriptionInput } from "./DescriptionInput";
import { DatePicker } from "./DatePicker";

const dateStyle = {
  flex: 1,
  backgroundColor: 'lightblue',
}

export const MultipleInput= (props) => {
  const width = "160px"
  return (
    <div>
      <div style={ {
      display: 'flex',
            }}>
          <div style={ {
                flex: 1,
                backgroundColor: 'lightblue',
              }}>
            <WriteInput name = "jméno" width={width} placeholder="sometext" readOnly={props.readOnly} userName={props.userName}/>
          </div>
          <div style={ {
                flex: 1,
                backgroundColor: 'lightblue',
              }}>
            <WriteInput name = "příjmení" width={width} readOnly={props.readOnly} userName={props.userSurname}/>
          </div>
        </div>
        <WriteInput name = "název úkolu"width={width}/>
        <WriteInput name = "stručný popis úkolu"width={width}/>

        <DescriptionInput name="úplný popis úkolu" />

        <WriteInput name = "odkaz na stránku"width={width}/>

        <div style={ {
      display: 'flex',
            }}>

          <div style={dateStyle}>
            <DatePicker name="Datum odevzdání:" />
          </div>

          <div style={dateStyle}>
            <DatePicker name="Datum naplnění:"/>
            </div>      
        </div>
    </div> 
  );
}