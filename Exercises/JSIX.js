/* add Binary JSIX - Nível de dificultad - Easy
Dadas dos strings binarias a y b, regreso su suma como una string binaria.

Ejemplo 1:

Input: a = "11", b = "1"
Output: "100"

Ejemplo 2:

Input: a = "1010", b = "1011"
Output: "10101"


Restricciones:

🔴 1 <= a.length, b.length <= 104
🔴 a y b consiste solo en caracteres '0' o '1'.
🔴 Cada cadena no contiene ceros a la izquierda, excepto el cero en sí.
*/

function addBinary(a,b){
    // Tu código acá:
    function addBinary(a,b){
        let carry = 0;
        let result = "";
        let i = a.length - 1;
        let j = b.length - 1;
        while (i >= 0 || j >= 0) {
            let sum = carry;
            if (i >= 0) {
                sum += parseInt(a[i]);
                i--;
            }
            if (j >= 0) {
                sum += parseInt(b[j]);
                j--;
            }
            carry = sum >> 1;
            result = (sum & 1) + result;
        }
        if (carry) {
            result = carry + result;
        }
        return result;
}




// No cambies nada después de esta línea
module.exports=addBinary;