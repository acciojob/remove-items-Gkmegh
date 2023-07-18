var colorSelect = document.getElementById('colorSelect');

function removeColor() {

  var selectedIndex = colorSelect.selectedIndex;

  colorSelect.remove(selectedIndex);
}

var button = document.querySelector('input');
button.addEventListener('click', removeColor);