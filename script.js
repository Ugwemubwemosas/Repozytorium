function wynik() 
{
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);

    let suma = a + b;

    document.getElementById("wynik").innerText = a + " + " + b + " = " + suma;
}