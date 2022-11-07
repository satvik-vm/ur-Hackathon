import {dbank} from "../../declarations";

window.addEventListener("load", async function(){
    const name = await dbank.getName();
    const age = await dbank.getAge();
    this.document.getElementById("name").innerText = name;
    this.document.getElementById("age").innerText = age;
})