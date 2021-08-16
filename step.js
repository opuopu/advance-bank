//  deposite section

document.getElementById("d-submit").addEventListener("click",function(){
 
    //  add input box and value

    const dValues = document.getElementById("d-input")
    const Dvalue = dValues.value
    const DvalueFloat = parseFloat(Dvalue)
   
    
    //  add deposite ammount on dashboard

    const dashDeposite = document.getElementById("d-balance")
    const oldDeposit  = dashDeposite.innerText;
    const totalDeposite = parseFloat(oldDeposit) + DvalueFloat
    dashDeposite.innerText = totalDeposite


    //  add money on balance dashboard
    const dashBalance = document.getElementById("total-b")
    const dashBalanceValue = dashBalance.innerText;

    const totalBalance = totalDeposite + parseFloat(dashBalanceValue);
// last e inner text korte hobe main id take
    dashBalance.innerText = totalBalance;

    // clear value
    dValues.value = "";

})
// withdraw  section

document.getElementById("w-submit").addEventListener("click",function(){

    const withdrawfield = document.getElementById("w-input");
    const withdrawValue = withdrawfield.value;
    

    //  add withdraw ammount to dashboard
    const dashWithdraw = document.getElementById("w-balance");
    const dashWithdrawtext = dashWithdraw.innerText;
    
    //  sum total withdraw money

    const totalwithdraw = parseFloat(withdrawValue) + parseFloat(dashWithdrawtext);

    dashWithdraw.innerText = totalwithdraw;

    //  decrese ammount when withdraw from balance;
const balance = document.getElementById("total-b")
const oldbalance = balance.innerText

const newbalance = parseFloat(oldbalance) - withdrawValue;

balance.innerText = newbalance;





    // clear
    withdrawfield.value = "";
})







// refresh section

document.getElementById("refresh").addEventListener("click",function(){

    window.location.href = "main.html"
})
