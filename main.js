// Codigo para calcular resultado 10 
function calcular() 
{
    var a = document.getElementById("numA").value;
    var b = document.getElementById("numB").value;
    var suma = parseInt(a) + parseInt(b);
    var salida = document.getElementById("salida");

	if (a == "" || b == "")
    {
        document.getElementById("salida").innerHTML = "<div class='alert'>Ingrese valores</div>";
    } else if (a == 10 || b == 10 || suma == 10)
    {
        // Uno de los números es 10 o ambos suman 10
        salida.innerHTML = "Si";
    } 
    else 
    {
        // Ninguno de los números es 10 o ambos tampoco suman 10
        salida.innerHTML = "No";
    }
}
  