const toggles = document.querySelectorAll('.toggle');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');
const compact = document.querySelector('#compact');

toggles.forEach(toggle =>
  toggle.addEventListener('change', (e) => doTheTrick(e.target)))
;

function doTheTrick(theClickedOne) {
  if (cheap.checked && fast.checked && compact.checked) {
    if(cheap === theClickedOne){
      compact.checked = false
    }
    if(fast === theClickedOne){
      cheap.checked = false
    }
    if(compact === theClickedOne){
      fast.checked = false
    }
  }
}