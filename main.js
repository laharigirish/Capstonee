
 function add() {
    var val1=Number(document.getElementById("value1").value);
    var val2=Number(document.getElementById("value2").value);
    var add_val= val1+ (val2);
document.getElementById("answer").innerHTML= "The Answer is  " + add_val;
    }

    function sub() {
        var val1=document.getElementById("value1").value;
        var val2=document.getElementById("value2").value;
        var sub_val= (val1-val2);
    document.getElementById("answer").innerHTML= "The Answer is  " + sub_val;
        }

        function mul() {
            var val1=document.getElementById("value1").value;
            var val2=document.getElementById("value2").value;
            var mul_val= (val1*val2);
        document.getElementById("answer").innerHTML= "The Answer is  " + mul_val;
            }

            function divi() {
                var val1=document.getElementById("value1").value;
                var val2=document.getElementById("value2").value;
                var div_val= (val1/val2);
            document.getElementById("answer").innerHTML= "The Answer is  " + div_val;
                }