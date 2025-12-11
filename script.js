// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].
function highlightListItems() {
  // Select all li elements
  const listItems = document.querySelectorAll("li");

  // Iterate through each list item and set color to blue
  for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "blue";
  }
}

// Call the function when the page and script is loaded
highlightListItems();

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
// here to handle the click event on the toggleButton [6, 7].
function toggleStatus(event) {
  // Task 6: Prevent default anchor behavior (page jump/refresh)
  event.preventDefault();

  // Task 5: Toggle the hidden class on status output
  statusOutput.classList.toggle("hidden");

  // Task 7: Change title background color based on visibility
  if (!statusOutput.classList.contains("hidden")) {
    // Status is visible - set background to yellow
    mainTitle.style.backgroundColor = "yellow";
    // Task 8: Create and append timestamp when becoming visible
    createTimestamp();
    return;
  }

  mainTitle.style.background = "";
  return;
}

// Task 8: Helper function to create timestamp
function createTimestamp() {
  // Create a new span element
  const timestampSpan = document.createElement("span");

  // Set its content to current time
  timestampSpan.innerHTML = " " + new Date().toLocaleTimeString();

  // Append it to the status-output
  statusOutput.appendChild(timestampSpan);
}

// Task 5: Add event listener to toggle button
toggleButton.addEventListener("click", toggleStatus);

/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].

// This is to start flashing the control panel
function startFlashing() {
  // Uses setInterval to toggle hidden class every 500ms for control-panel
  intervalId = setInterval(function () {
    controlPanel.classList.toggle("hidden");
  }, 500);
}

// Function to stop flashing the control panel
function stopFlashing() {
  // Clear the interval using the stored interval ID
  clearInterval(intervalId);

  // Make sure control panel is visible after stopping
  controlPanel.classList.remove("hidden");
}

// Bind startFlashing to single click
timerButton.addEventListener("click", startFlashing);

// Bind stopFlashing to double click
timerButton.addEventListener("dblclick", stopFlashing);
