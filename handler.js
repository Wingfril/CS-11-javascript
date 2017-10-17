// Toggles the style with name styleName on the tag, with either the value or
// the default value.
function toggleStyle(el, styleName, value) {

  if (el.style.styleName === '')
  {
    el.style.styleName = value;
  }
  else {
    el.style.styleName = '';
  }

}

function onFormSubmit(e) {
  var form = e.target;
  console.log("javascript is working");
  e.preventDefault();
  var foo = form.foo.value;
  var bar = form.bar.value;
  var response = Document.getElementsByName("response");
  response.innerHTML = foo + " " +bar;
}

function formAlert(e) {
  var form = e.target;
  var foo = form.foo;
  var bar = form.bar;
  alert("foo: " + foo + "/nbar: " + bar);
}

function toggleBox(e) {
  var box = document.getElementById("box");
  toggleStyle(e, 'display', 'none')
}

function rotateColors(e) {
  var box = document.getElementById("box");
  var color = box.style.backgroundColor;
  if (color === 'red')
  {
      box.style.backgroundColor = 'blue';
  }
  else if (color === 'blue')
  {
    box.style.backgroundColor = 'green';
  }
  else if (color === 'green')
  {
      box.style.backgroundColor = 'blue';
  }
}

function onTagButtonClick(e) {
  var el = e.target;
  var tagsEl = document.getElementById("tags");
  // TODO: Check for the id here and determine which values to toggle. Then
  // loop over all the tags you find and toggle the appropriate values.
}

function initCanvas() {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");
  // TODO: Fill the canvas with the color #ddd
}

function randomColor() {
  var r = (Math.random() * 256 | 0).toString(16);
  var g = (Math.random() * 256 | 0).toString(16);
  var b = (Math.random() * 256 | 0).toString(16);
  return "#" + r + g + b;
}

function drawBox(e) {
  var c = document.getElementById("canvas");
  var ctx = c.getContext("2d");

  // Firefox doesn't set offsetX/offsetY.
  if(!e.hasOwnProperty('offsetX')) {
    e.offsetX = e.layerX - e.currentTarget.offsetLeft;
    e.offsetY = e.layerY - e.currentTarget.offsetTop;
  }
  var mouseX = e.offsetX;
  var mouseY = e.offsetY;

  // TODO: Fill a rectangle with a random color, with a width between 50 and
  // 200 and a height between 50 and 100, such that it is centered around the
  // point (mouseX, mouseY)
}
