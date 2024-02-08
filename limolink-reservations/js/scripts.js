
// -- Menu Toggle -- //
$("#user-menu-toggle").click(function(){
	$("#user-menu-list").toggleClass("open");
});

// -- Toggle Buttons -- //
$(".btn-toggle-group a").click(function (e) {
  e.preventDefault(); // Prevent the default behavior of the anchor tag

  // Remove 'active' class from all anchor tags
  $(".btn-toggle-group a").removeClass("active");

  // Add 'active' class to the clicked anchor tag
  $(this).addClass("active");

  // Check if the clicked button is "Hourly"
  var isHourly = $(this).text() === "Hourly";

  // Toggle 'show' class for the hours-toggle div
  $(".hours-toggle").toggleClass("show", isHourly);

  // Animate the height of the .hours-toggle element
  $(".hours-toggle").animate(
    {
      height: isHourly ? $(".hours-toggle").get(0).scrollHeight : 0,
    },
    300 // Animation duration in milliseconds
  );
});

// Add Stops //
let stopCounter = 1;

  function addStop() {
    // Create a new location item
    const newStop = document.createElement('div');
    newStop.className = 'location-item';

    newStop.innerHTML = `
      <div class="form-group">
        <div class="flex">
          <label>Stop #${stopCounter}</label>
          <ul class="location-list">
          <li><a href="#.html" class="tablinks active" onclick="locType(event, 'Place')" data-tab="Place">Place</a></li>
            <li><a href="#.html" class="tablinks" onclick="locType(event, 'Commercial-Aviation')" data-tab="Commercial-Aviation">Commercial Airport</a></li>
            <li><a href="#.html" class="tablinks" onclick="locType(event, 'Private-Aviation')" data-tab="Private-Aviation">Private Aviation</a></li>
            <li><a href="#.html" class="tablinks" onclick="locType(event, 'Train')" data-tab="Train">Train</a></li>
            <li><a href="#.html" class="tablinks" onclick="locType(event, 'Heliport')" data-tab="Heliport">Heliport</a></li>
            <li><a href="#.html" class="tablinks" onclick="locType(event, 'Recents')" data-tab="Recents">Recents</a></li>
            <li><a href="#.html" class="tablinks" onclick="locType(event, 'Address-Book')" data-tab="Address-Book">Address Book</a></li>
            <li><a href="#.html" class="tablinks" onclick="locType(event, 'Notes')" data-tab="Notes">Notes</a></li>
        </ul>
        </div>
        <div class="location-input">

        <!-- Place -->
        <div data-content="Place" class="tabcontent">
          <i class="fa fa-search"></i>
          <div class="flex">
            <input type="search" placeholder="Search Place">
          </div>
        </div>

        <!-- Commercial Air -->
        <div data-content="Commercial-Aviation" class="tabcontent">
          <i class="fa fa-search"></i>
          <div class="flex">
            <div class="ico-input">
              <i class="fa fa-search"></i>
              <input type="search" placeholder="Search Airports">
            </div>
            <div class="ico-input">
              <i class="fa fa-plane"></i>
              <input type="text" placeholder="Airline">
            </div>
            <div class="ico-input">
              <i class="fa fa-hashtag"></i>
              <input type="number" placeholder="Flight No.">
            </div>
          </div>
        </div>

        <!-- Private Air -->
        <div data-content="Private-Aviation" class="tabcontent">
          <div class="flex flex-five-box">
            <div class="ico-input">
              <i class="fa fa-search"></i>
              <input type="search" placeholder="Search Airports">
            </div>
            <div class="ico-input">
              <i class="fa fa-plane"></i>
              <input type="text" placeholder="FBO/Hanger">
            </div>
            
            <div class="ico-input">
              <i class="fa fa-hashtag"></i>
              <input type="text" placeholder="Tail No.">
            </div>
            <div class="ico-input">
              <i class="fa fa-plane-arrival"></i>
              <input type="time">
            </div>
            <div class="ico-input">
              <i class="fa fa-headset"></i>
              <input type="text" placeholder="Flight Designator">
            </div>
          </div>
        </div>

        <!-- Train -->
        <div data-content="Train" class="tabcontent">
          <div class="flex">
            <div class="ico-input">
              <i class="fa fa-search"></i>
              <input type="search" placeholder="Pickup Location">
            </div>
            <div class="ico-input">
              <i class="fa fa-train"></i>
              <input type="text" placeholder="Station Code">
            </div>
            <div class="ico-input">
              <i class="fa fa-hashtag"></i>
              <input type="text" placeholder="Train Number">
            </div>
          </div>
        </div>

        <!-- Heliport -->
        <div data-content="Heliport" class="tabcontent">
          <div class="flex">
            <div class="ico-input">
              <i class="fa fa-search"></i>
              <input type="search" placeholder="Pickup Location">
            </div>
            <div class="ico-input">
              <i class="fa-regular fa-clock"></i>
              <input type="time" value="12:00">
            </div>
          </div>
        </div>

        <!-- Recents -->
        <div data-content="Recents" class="tabcontent">
          <div class="flex">
            <div class="ico-input">
              <i class="fa-regular fa-clock"></i>
              <div class="custom-select">
                <select>
                  <option>Select</option>
                  <option>Claudia Gray</option>
                  <option>Emperor Palpatine</option>
                  <option>Tyreek Hill</option>
                  <option>Benjamin Rush</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- Address Book -->
        <div data-content="Address-Book" class="tabcontent">
          <div class="flex">
            <div class="ico-input">
              <i class="fa-regular fa-address-book"></i>
              <div class="custom-select">
                <select>
                  <option>Select</option>
                  <option>123 House Street</option>
                  <option>Rebel Base, Yavin 4</option>
                  <option>Miami Dolphins Practice Facility</option>
                  <option>Liberty Pub</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick List -->
        <div data-content="Notes" class="tabcontent">
          <div class="flex">
            <div class="ico-input">
              <i class="fa fa-list"></i>
              <div class="custom-select">
                <select>
                  <option>Select</option>
                  <option>Claudia Gray</option>
                  <option>Emperor Palpatine</option>
                  <option>Tyreek Hill</option>
                  <option>Benjamin Rush</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="ico-actions">
          <a href="#.html" class="ico-action"><i class="fa fa-save"></i></a>
          <a href="#.html" class="ico-action" onclick="removeStop(this)"><i class="fa fa-circle-xmark"></i></a>
        </div>
      </div>

    `;

    // Append the new location item to the "stops" container
    document.querySelector('.stops').appendChild(newStop);

    // Trigger reflow to apply the initial max-height style
    newStop.offsetHeight;

    // Set max-height to allow for CSS transition
    newStop.style.minHeight = newStop.scrollHeight + 'px';

    // Add transitioning class
    newStop.classList.add('new-item');

    // Increment the stop counter for the next stop
    stopCounter++;

    // Initialize custom select for the new location item
    initializeCustomSelect(newStop);
  }
  function removeStop(deleteButton) {
    // Find the parent location-item
    const locationItem = deleteButton.closest('.location-item');

    // Remove the "new-item" class
    locationItem.classList.remove('new-item');

    // Set max-height to 0 for transition
    locationItem.style.maxHeight = '0';

    // Remove the location-item when the transition ends
    locationItem.addEventListener('transitionend', function () {
        locationItem.remove();
    });
}

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
function initializeCustomSelect(element) {
  var x, i, j, l, ll, selElmnt, a, b, c;

  // If no element is provided, default to the entire document
  element = element || document;

  /* Look for any elements with the class "custom-select": */
  x = element.getElementsByClassName("custom-select");
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

      c.addEventListener("click", function (e) {
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

    a.addEventListener("click", function (e) {
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
        arrNo.push(i);
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
}

document.addEventListener("DOMContentLoaded", function () {
  // Call the function to initialize custom selects for the entire document
  initializeCustomSelect();
});

// Example of calling the function for a specific element (e.g., after adding dynamic content)
// const dynamicContentElement = document.getElementById("yourDynamicContentId");
// initializeCustomSelect(dynamicContentElement);
