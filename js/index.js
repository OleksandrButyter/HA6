// JavaScript File
 function equation() {
  var a = document.equation.a.value;
  var b = document.equation.b.value;
  var c = document.equation.c.value;
  var res = document.getElementById("res");
  var d = b * b - 4 * a * c;
  if ( d < 0 ) {
    string = "Pівняння не має дійсних коренів ! ! !";
  } else {
        string = "x<sub>1</sub> = ";
        string += (-b + Math.sqrt(d)) / (2 * a);
        string += ";<br> x<sub>2</sub> = ";
        string += (-b - Math.sqrt(d)) / (2 * a);
        string += ".";
        }
  res.innerHTML = string;
}

