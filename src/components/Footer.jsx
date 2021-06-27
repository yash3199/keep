import React from "react";
var day=new Date();
var year=day.getFullYear();
function Footer(){
    return(
        <footer>
            <p>Coptright @ {year}</p>
        </footer>
    );
}
export default Footer;