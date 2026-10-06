var bankname ="Secure Bank Ltd."
let branch = "Ahemadabad"
const IFSC ="0000001"
function showScope() {
    console.log("This is Demo")
    var message =" "
    console.log(message)
    console.log(typeof message)

    if(true){
        var customer ="Bhargav Jagtap";
        let account ="Saving";

        message += "<b>"+ "customer :"+customer+ " <br> "+ "</b>"
        console.log(message)

         message +=  "Account :"+ account+ " <br> "
    }

         message +=  "customer outside Block :"+customer+ " <br> ";

          message +=  "Branch :"+branch+ " <br> ";

          message += "Bank :"+bankname+ " <br> ";

            message +=  "IFSC :"+IFSC+ " <br> ";

            const op = document.getElementById('output')
            op.innerHTML = message
}

function calculateSimpleInterest(p,r,t){
    return (p*r*t)/100;
}

function calculateInterest()
{

    let loan = document.getElementById('loan').value 

    let rate = document.getElementById('rate').value

    let years = document.getElementById('years').value

    const sInterest =calculateSimpleInterest(loan,rate,years)
    const op = document.getElementById('output')
    op.innerHTML = "Simple Interest : "+sInterest

}
function calculateEMI(){
    var loan = document.getElementById('loan').value 

    var rate = document.getElementById('rate').value

    var years = document.getElementById('years').value

    let emi = calculateMonthlyEMI(loan,rate,years);

    const op = document.getElementById('output')
    op.innerHTML = "Monthly EMI :" + emi

}
function calculateMonthlyEMI(l,r,y){
    let monthlyRate = r/(12*100)
    let months =y*12

    let emi =(1*monthlyRate*Math.pow(1+monthlyRate,months))/(Math.pow(1+monthlyRate,months)-1);
    console.log(emi.toFixed(2))
    return emi.toFixed(2)
}

function generateInterestTable(){
    let loan = document.getElementById("loan").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let result = "<h3>Interest Table</h3>";
    for(let year = 1; year = years; year++)
    {
        let Interest = calculateSimpleInterst(loan, rate, year);
        result += "Year "+year+" :"+Interest+"<br>";
    }
    let count = 1;
    result = "<br>"
}
function checkEligibility(){
    let age = document.getElementById("age").value
    let loan = document.getElementById("loan").value
    let income =document.getElementById("income").value
    if (age>18 && age<=60 && income>=30000) {
        document.getElementById("output").innerHTML="Eligible for loan"
        
    }
    else{
        document.getElementById("output").innerHTML="Eligible for loan"
    }
}
function accountType(){
    let type =Number(prompt("1.Savings\n2.Current\n3.Fixed Deposit"))
    let c=confirm("Are you sure to select this ??")
    console.log(typeof type)
    if (c==true) {
        switch (type) {
            case 1:
                document.getElementById("output").innerHTML="Savings Account Selected"
                break;
        case 2:
            document.getElementById("output").innerHTML="Current Account Selected"
            break;
            case 3:
            document.getElementById("output").innerHTML="Fixed Deposit Selected"
            break;
            default:
                document.getElementById("output").innerHTML="Invalid Choice !!!"
                break;
        }
    }

}