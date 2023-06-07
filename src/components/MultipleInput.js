import React from "react";
import { DateInput } from "./DateInput";
import { WriteInput } from "./WriteInput";
import { DescriptionInput } from "./DescriptionInput";



export const MultipleInput= (props) =>  {
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
            <WriteInput name = "jméno" width={width} placeholder="sometext"/>
          </div>
          <div style={ {
                flex: 1,
                backgroundColor: 'lightblue',
              }}>
            <WriteInput name = "příjmení" width={width}/>
          </div>
        </div>
        <WriteInput name = "název úkolu"width={width}/>
        <WriteInput name = "stručný popis úkolu"width={width}/>

        <DescriptionInput name="úplný popis úkolu" />

        <WriteInput name = "odkaz na stránku"width={width}/>
        <DateInput name = "datum odevzdání"width={width}/>
        <DateInput name = "datum plnění" width={width}/>
    </div> 
  );
}