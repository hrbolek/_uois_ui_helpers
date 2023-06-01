import React from "react";
import { DateInput } from "./DateInput";
import { WriteInput } from "./WriteInput";

export const MultipleInput= (props) =>  {
  return (
    <div>
        <WriteInput name = "jméno"/>
        <WriteInput name = "příjmení"/>
        <WriteInput name = "název úkolu"/>
        <WriteInput name = "stručný popis úkolu"/>
        <WriteInput name = "plný popis úkolu"/>
        <WriteInput name = "odkaz na stránku"/>
        <DateInput name = "datum odevzdání"/>
        <DateInput name = "datum plnění" />
        
        

    </div>
    
  );
}