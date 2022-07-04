function createSpoilerMessage() {
  const warning = document.getElementById('warning').value;
  const content = document.getElementById('content').value;
  const padding = '\u200B'.repeat(4000);
  const message = warning + padding + content;

  document.getElementById('message').value = message;
}

function copySpoilerMessage() {
  document.getElementById('message').select();
  document.execCommand('copy');
}