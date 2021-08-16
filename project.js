function clicked(id){
const amount = document.getElementById(id)
const totalamount = amount.value;
const DvalueFloat= parseFloat(totalamount);
amount.value = ""
return DvalueFloat;

}

function dashboard(id,depositanswer){

    const dashboardAmount = document.getElementById(id);
    const amountText = dashboardAmount.innerText
    const total = parseFloat(amountText) + depositanswer;
    dashboardAmount.innerText = total;



}



document.getElementById("d-submit").addEventListener("click",function(){
 
  
   const  depositanswer = clicked("d-input")
    
    //  add deposite ammount on dashboard
    dashboard("d-balance",depositanswer)

    


    //  add money on balance dashboard
    const dashBalance = document.getElementById("total-b")
    const dashBalanceValue = dashBalance.innerText;

   
   const totalBalance = depositanswer + parseFloat(dashBalanceValue);
// last e inner text korte hobe main id take
    dashBalance.innerText = totalBalance;

    // clear value
    dValues.value = "";

})
// withdraw  section

document.getElementById("w-submit").addEventListener("click",function(){

   
   const  depositanswer = clicked("w-input")
  
    dashboard("w-balance",depositanswer)

    //  decrese ammount when withdraw from balance;
const balance = document.getElementById("total-b")
const oldbalance = balance.innerText


   const newbalance = parseFloat(oldbalance) - depositanswer;

balance.innerText = newbalance;


})


// refresh section

document.getElementById("refresh").addEventListener("click",function(){

    window.location.href = "main.html"
})