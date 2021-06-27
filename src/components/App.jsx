import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../Notes";
function App(){
    return(
     <div>
     <Header></Header>
     <Footer></Footer>
     {Notes.map(notedetail=>(
      <Note 
      key={notedetail.key} 
      title={notedetail.title} 
      content={notedetail.content}>
      </Note>
     ))}
     </div>
    );
}
export default App;