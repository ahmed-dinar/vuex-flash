

//https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
export function hasClass(el, className) {
  return el.classList ? el.classList.contains(className) : new RegExp('\\b'+ className+'\\b').test(el.className);
}

//https://stackoverflow.com/questions/15739263/phantomjs-click-an-element
export function click(el){
  var ev = document.createEvent('MouseEvent');
  ev.initMouseEvent(
    'click',
    true /* bubble */, true /* cancelable */,
    window, null,
    0, 0, 0, 0, /* coordinates */
    false, false, false, false, /* modifier keys */
    0 /*left*/, null
  );
  el.dispatchEvent(ev);
}