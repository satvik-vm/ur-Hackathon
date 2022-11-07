import {dbank} from "../../declarations/dbank";

window.addEventListener("load", async function(){
    const currentAmount = await dbank.checkBalance();
    this.document.getElementById("balance-out").innerText = currentAmount.toFixed(2);
})

const deposit_amt = parseFloat(document.getElementById("deposit-in"));

this.document.getElementById("deposit-btn").addEventListener("onclick", async function(){
    await dbank.deposit(deposit_amt);
    const currentAmount = await dbank.checkBalance();
    this.document.getElementById("balance-out").innerText = currentAmount.toFixed(2);
})

const withdrawlAmount = parseFloat(document.getElementById("withdrawl-in"));

this.document.getElementById("withdrawl-btn").addEventListener("onclick", async function(){
    await dbank.withdrawl(withdrawlAmount);
    const currentAmount = await dbank.checkBalance();
    this.document.getElementById("balance-out").innerText = currentAmount.toFixed(2);
})

this.document.getElementById("balance-btn").addEventListener("onclick", async function(){
    const currentAmount = await dbank.checkBalance();
    this.document.getElementById("balance-out").innerText = currentAmount.toFixed(2);
})
