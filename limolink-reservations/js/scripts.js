
// -- Menu Toggle -- //
$("#user-menu-toggle").click(function(){
	$("#user-menu-list").toggleClass("open");
});

//* Toggle Dropdown *//
function toggleDropdown(link) {
  var dropdown = link.closest('.dropdown');
  var dropdownMenu = dropdown.querySelector('.dropdown-menu');
  dropdownMenu.style.display = (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') ? 'block' : 'none';
}

//* Modal Modal *//
document.addEventListener('DOMContentLoaded', () => {
  let scrollPosition;

  const showDialog = (target) => {
    const modal = document.getElementById(target);
    scrollPosition = window.scrollY;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';  // Prevent scrolling in the background
  };

  const closeDialog = (modal) => {
    modal.classList.remove('open');
    document.body.style.overflow = '';  // Allow scrolling in the background
    window.scrollTo(0, scrollPosition);
  };

  // Attach event listener to all modal toggle links
  const modalToggles = document.querySelectorAll('.modal-toggle');
  modalToggles.forEach(modalToggle => {
    modalToggle.addEventListener('click', (event) => {
      event.preventDefault();
      const target = modalToggle.getAttribute('data-target');
      const openModal = document.querySelector('.modal.open');
      if (openModal && openModal !== target) {
        // Close the currently open modal
        closeDialog(openModal);
      }
      // Open the target modal
      showDialog(target);
    });
  });

  // Attach event listener to the close button within the modal header
  const modalCloses = document.querySelectorAll('.modal .modal-toggle');
  modalCloses.forEach(modalClose => {
    modalClose.addEventListener('click', (event) => {
      event.preventDefault();
      const modal = modalClose.closest('.modal');
      closeDialog(modal);
    });
  });

  // Attach event listener to the cancel button within the modal
  const cancelButton = document.querySelector('.form-actions .btn-secondary');
  cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    const modal = cancelButton.closest('.modal');
    closeDialog(modal);
  });
});



// -- Location Tabs -- //
function locType(evt, locType) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get the parent .location-item element
  var parent = evt.currentTarget.closest('.location-item');

  // Get all elements with class="tabcontent" inside the specific parent and hide them
  tabcontent = parent.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" inside the specific parent and remove the class "active"
  tablinks = parent.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  var currentTab = parent.querySelector('[data-tab="' + locType + '"]');
  var currentContent = parent.querySelector('[data-content="' + locType + '"]');
  
  if (currentTab && currentContent) {
    currentContent.style.display = "block";
    currentTab.classList.add("active");
  }
}


// -- Custom  Select -- //
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect); 
