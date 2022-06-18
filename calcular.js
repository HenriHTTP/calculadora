
const number9 = document.getElementById ('9')
const number8 = document.getElementById ('8')
const number7 = document.getElementById ('7')
const number6 = document.getElementById ('6')
const number5 = document.getElementById ('5')
const number4 = document.getElementById ('4')
const number3 = document.getElementById ('3')
const number2 = document.getElementById ('2')
const number1 = document.getElementById ('1')
const number0 = document.getElementById ('0')
const plus = document.getElementById ('+')
const Result_cont  = document.getElementById ('=')
const sub = document.getElementById ('-')
const div = document.getElementById ('/')
const mut = document.getElementById ('*')
const remove = document.getElementById("c")



function  Transform (action,value){ 

    if(action === "option"){ 
        
        if (value === "c"){ 
            document.getElementById("visor").value = ""
        }
        if (value === "+" || value === "-" || value === "/" || value === "*"   ){
            document.getElementById("visor").value += value
        }
        if(value === "="){
            var result_new_value =eval(document.getElementById('visor').value) 
            document.getElementById('visor').value = result_new_value 
        } 

    }
   
   
    if (action === "number") { 
        document.getElementById("visor").value += value

    }
    console.log (action,value)
}

number0.addEventListener('click',function(event){
    Transform('number',0)
})
number1.addEventListener('click',function(event){
    Transform('number',1)
})
number2.addEventListener('click',function(event){
    Transform('number',2)
})
number3.addEventListener('click',function(event){
    Transform('number',3)
})
number4.addEventListener('click',function(event){
    Transform('number',4)
})
number5.addEventListener('click',function(event){
    Transform('number',5)
})
number6.addEventListener('click',function(event){
    Transform('number',6)
})
number7.addEventListener('click',function(event){
    Transform('number',7)
})
number8.addEventListener('click',function(event){
    Transform('number',8)
})
number9.addEventListener('click',function(event){
    Transform('number',9)
})
plus.addEventListener('click',function(event){
    Transform('option',"+")
})
sub.addEventListener('click',function(event){
    Transform('option',"-")
})
div.addEventListener('click',function(event){
    Transform('option',"/")
})
mut.addEventListener('click',function(event){
    Transform('option',"*")
})
remove.addEventListener('click',function(event){
    Transform('option',"c")
})
Result_cont.addEventListener('click',function(event){
    Transform('option',"=")
})