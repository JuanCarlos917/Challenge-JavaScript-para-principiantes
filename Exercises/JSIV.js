/* Valid Parentheses Level - Easy

Dada una cadena que contiene solo los caracteres '(', ')', '{', '}', '[' y ']', determine si la cadena de Input es válida. Una cadena de Input es válida si:

Los corchetes abiertos deben cerrarse con el mismo tipo de corchetes.
Los corchetes abiertos deben cerrarse en el orden correcto.
Cada paréntesis cerrado tiene un paréntesis abierto correspondiente del mismo tipo.


Ejemplo 1:

Input: s = "()"
Output: true

Ejemplo 2:

Input: s = "()[]{}"
Output: true

Ejemplo 3:

Input: s = "(]"
Output: false


Restricciones:

🔴 1 <= s.length <= 104
🔴 s consta de paréntesis solo '()[]{}'. */

function isValid(s) {
  // Tu código acá:
  let stack = [];
  let mapping = {
      ')': '(',
      ']': '[',
      '}': '{'
  }

  for (let i = 0; i < s.length; i++) {
      let c = s.charAt(i);
      if (c === '(' || c === '[' || c === '{') {
          stack.push(c);
      } else if (stack.length === 0 || stack[stack.length - 1] !== mapping[c]) {
          return false;
      } else {
          stack.pop();
      }
  }
  return stack.length === 0;

}

// No cambies nada después de esta línea
module.exports = isValid;