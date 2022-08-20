function clicou(){
    document.getElementById("p1").innerHTML = "<p>ola pessoas</p>";
}
function soma(){
    var a = Number(prompt("digite o primeiro valor"));
    var b = Number(prompt("digite o segundo valor"));
    var c = a+b;
    console.log(c);
}
function converter(){
    var s = String(prompt("digite o texto a ser conertido"));
    alert(s.toUpperCase());
}

