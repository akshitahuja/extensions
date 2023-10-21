function nodeInsertedCallback(event) {
  var link = document.querySelector('fl-floating-action[text="view new projects"]');

  if (link) {
    link.click();
    console.log('loaded new projects');
  }
};
document.addEventListener('DOMNodeInserted', nodeInsertedCallback);