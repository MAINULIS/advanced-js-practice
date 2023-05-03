function f1() {
    //function to make the text bold using DOM method
    document.getElementById("textarea").style.fontWeight = "bold";
}
// function to make the text italic
function f2(){
    document.getElementById('textarea').style.fontStyle = 'italic'
}
// function to make the text underline
function f3(){
    document.getElementById('textarea').style.textDecoration = 'underline'
}
// function to make text align left
function f4(){
    document.getElementById('textarea').style.textAlign ='left'
}
// function to make text align center
function f5(){
    document.getElementById('textarea').style.textAlign ='center'
}
// function to make text align right
function f6(){
    document.getElementById('textarea').style.textAlign ='right'
}
// function to control text size
function f7(){
    document.getElementById('textarea').style =''
}
// function to clear the text field
function f9(){
    document.getElementById('textarea').value = '';
}

const  colorInput = document.getElementById('color');
 const color = colorInput.value;

colorInput.addEventListener('input',function(){
document.getElementById('textarea').innerText = color;
});