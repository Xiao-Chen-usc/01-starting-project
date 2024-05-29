import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useEffect } from "react";
import  Section  from "./Section";
import Tabs from "./Tabs";


export default function Examples() {

    const [ selectTopic, setSelectedTopic ] =  useState();

    function handleSelect(selectedButton){
      //console.log(selectedButton);
      // selectedButton => "components", "jsx", "props", "state"
      setSelectedTopic(selectedButton);
      console.log(selectTopic);
    }
    useEffect(() => {
      console.log("useEffect");
      console.log("end useEffect");
  }, []); 
    return(
        <Section title="Examples" id ="examples">
          <Tabs
          buttonsContainer = "menu"
          buttons={
          <>          
          <TabButton isSelected = {selectTopic === "components"} onClick={() => handleSelect("components")}>Components</TabButton>
          <TabButton isSelected = {selectTopic === "jsx"} onClick={() => handleSelect('jsx')}>JSX</TabButton>
          <TabButton isSelected = {selectTopic === "props"} onClick={() => handleSelect('props')}>Props</TabButton>
          <TabButton isSelected = {selectTopic === "state"} onClick={() => handleSelect('state')}>State</TabButton>
          </>
          }
          >
          </Tabs>
        {selectTopic === undefined ? <p>Please select a topic</p> : null}
        {selectTopic !== undefined ? (
        <div id = "tab-content">
          <h3>{EXAMPLES[selectTopic].title}</h3>
          <p>{EXAMPLES[selectTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectTopic].code}</code>
          </pre>
        </div>
        ) :null}
      </Section>
    )
}