function about(){
    window.alert('This is prorammed by: Darwin Miranda');
    console.log('This is prorammed by: Darwin Miranda');
}
function Computesum(){
    let n1,n2,sum
    n1=parseFloat(document.getElementById('num1').value)
    n2=parseFloat(document.getElementById('num2').value)
    sum=n1+n2;
   document.getElementById('total').value = sum
}
function Computesub(){
    let n1,n2,sub
    n1=parseFloat(document.getElementById('num1').value)
    n2=parseFloat(document.getElementById('num2').value)
    sub=n1-n2;
   document.getElementById('total').value = sub
}
function Computepro(){
    let n1,n2,pro
    n1=parseFloat(document.getElementById('num1').value)
    n2=parseFloat(document.getElementById('num2').value)
    pro=n1*n2;
   document.getElementById('total').value = pro
}
function Computepro(){
    let n1,n2,pro
    n1=parseFloat(document.getElementById('num1').value)
    n2=parseFloat(document.getElementById('num2').value)
    pro=n1*n2;
   document.getElementById('total').value = pro
}
function Computequo(){
    let n1,n2,pro
    n1=parseFloat(document.getElementById('num1').value)
    n2=parseFloat(document.getElementById('num2').value)
    quo=n1/n2;
   document.getElementById('total').value = quo
}
function clearr(){
    document.getElementById('num1').value = '';
         document.getElementById('num2').value = '';
           document.getElementById("total").value = '';
}
function dis(){
    document.getElementById('total').disabled = true;
}
