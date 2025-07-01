const text = `[system] Запуск...\n[prostohacker.secret] Готов к приёму.`;
const terminal = document.getElementById('terminal');

let i = 0;
function typeWriter() {
  if (i < text.length) {
    terminal.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();
