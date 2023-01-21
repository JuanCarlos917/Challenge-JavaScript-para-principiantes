/* Longest Common Prefix

//Escriba una función para encontrar la cadena de prefijo común más larga entre una matriz de cadenas.
Si no hay un prefijo común, devuelve un string  vacío "".

 Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explicación: No hay un prefijo común entre la entrada strings.

Restricciones:

🔴 1 <= strs.length <= 200
🔴 0 <= strs[i].length <= 200
🔴 strs[i] consta solo de letras minúsculas en inglés. */

function longestCommonPrefix(strs){
    // Tu código aca:
    if (strs.length === 0) {
        return "No hay un prefijo común entre la entrada strings.";
      }
      if (strs.length === 1) {
        return strs[0];
      }
      strs.sort();
      var first = strs[0];
      var last = strs[strs.length - 1];
      for (var i = 0; i < first.length; i++) {
        if (first[i] !== last[i]) {
          return first.substring(0, i);
        }
      }
      return first;

}







// No cambiar nada debajo de esta línea

module.exports = longestCommonPrefix;