import {dbank} from "../../declarations/dbank";

document.getElementById("num-deposit").addEventListener("onclick", async function(){
    const num_fd = await dbank.check_fd();
    document.getElementById("fd-out").innerText = num_fd;
})

const amt_fd = parseFloat(document.getElementById("amount-fd"));
const time_fd = parseInt(document.getElementById("time-fd"));

document.getElementById("create-fd").addEventListener("onclick", async function(){
    await dbank.fixed_deposit(amt_fd, time_fd);
})

document.getElementById("withdraw").addEventListener("onclick", async function(){
    await dbank.withdraw_fd();
})

