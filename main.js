// Codigo para calcular resultado 10 
function calcular() 
{
    var a = document.getElementById("numA").value;
    var b = document.getElementById("numB").value;
    var salida = document.getElementById("salida");

	if (a == "" || b == "")
    {
        document.getElementById("salida").innerHTML = "<div class='alert'>Ingrese valores</div>";
    } else if (a == 10 || b == 10 || a+b == 10)
    {
        salida.innerHTML = "Si";
    } 
    else 
    {
        salida.innerHTML = "No";
    }
}
  