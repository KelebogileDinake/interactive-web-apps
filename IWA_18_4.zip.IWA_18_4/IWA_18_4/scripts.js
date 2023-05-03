//importing functions from data.js and views.js files
import { COLUMNS, state, updateDragging, createOrderData, TABLES } from "./data.js";
import { createOrderHtml, html, updateDraggingHtml, moveToColumn } from "./view.js";
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
*/
// Dragging Event
//this handleDragOver function is an event handler for the dragover event. 
//It listens for when a user drags an order over a column and updates the state and HTML to reflect this
const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area
      break;
    }
  }

  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};
let dragged;
//The handleDragStart, handleDragDrop, handleDragEnd functions are event handlers for the dragstart, drop and dragend events
//they handle the user's drag and drop actions and update the state and HTML to reflect the new order of items in the columns 
const handleDragStart = (e) => {
  dragged = e.target;
};
const handleDragDrop = (f) => {
  f.target.append(dragged);
};
const handleDragEnd = (g) => {
  const background = g.target.closest("section");
  background.style.backgroundColor = "";
};

//attach event listeners to each column of the HTML
for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
  htmlArea.addEventListener("dragstart", handleDragStart);
  htmlArea.addEventListener("drop", handleDragDrop);
  htmlArea.addEventListener("dragend", handleDragEnd);
};
// the handleHelp and AddToggle functions are evemt handlers that toggle the visibility of a help menu and an 
//"add order" form. The attache= to the appropriate buttons in the HTML
//opens Help screen
const handleHelpToggle = () => {
  html.help.overlay.toggleAttribute('open');
};
html.help.cancel.addEventListener('click', handleHelpToggle);
html.other.help.addEventListener('click', handleHelpToggle);

//Opens Add Order menu
const handleAddToggle = () => {
  html.add.overlay.toggleAttribute('open');
};
html.add.cancel.addEventListener('click', handleAddToggle);
html.other.add.addEventListener('click', handleAddToggle);

//this function handleAddSubmit is an event on the "add order" form. 
//It creates a new order object, adds it to the state, creates an HTML element for it,
//and adds that element to the "ordered column" of the HTML  
//Submit Information
const handleAddSubmit = (event) => {
  event.preventDefault(); //Method is used to prevent the browser from executing the default section

  const order = {
    id: state.orders,
    title: html.add.title.value,
    table: html.add.table.value,
    created: new Date(),
  };

  const orderElement = createOrderHtml(order);
  html.area.ordered.append(orderElement);

  html.add.form.reset();
  html.add.overlay.close();
};
html.add.form.addEventListener("submit", handleAddSubmit);

//the handleEditToggle function is an event handler that toggles the visibility of an "edit order form". It attaches to a button in the HTML
//Open edit menu
const handleEditToggle = () => {
  html.edit.overlay.toggleAttribute("open");
};
html.other.grid.addEventListener('click', handleEditToggle);
html.edit.cancel.addEventListener('click', handleEditToggle);
//the function handleEditSubmit is an event handler for the submit event on the "edit order" form
//it updates the order object in the state with the new values from the form, updates the HTML element for that order
//and moves the order element tp the appropriate column of the HTML based on the new column value.
//Submit Edited information
const handleEditSubmit = (event) => {
  event.preventDefault();


  const { id, title, table, created, column } = {
    title: html.edit.title.value,
    table: html.edit.table.value,
    created: new Date(),
    id: state.orders,
    column: html.edit.column.value,
  };

  const order = { id, title, table, created, column }

  //Find the Index of the order to be updated
  let orderId = -1; //-1 allows us to check if an order index has been found
  //Find the order element in the HTML
  for (let i = 0; i < state.orders.length; i++) {
    if (state.orders[i].id === id) {
      orderId = i;
      break;
    }
  }

  //Update the order data in the state object
  state.orders[orderId] = createOrderData(order);

  //Update the order element with the new date
  const newOrder = createOrderHtml(order);
  const oldOrder = document.querySelector(`[data-id="${id}"]`);
  oldOrder.replaceWith(newOrder);

  //Update the order element using dragging


  //Move the order element to the correct column in the HTML
  switch (column) {
    case "ordered":
      html.area.ordered.append(newOrder);
      break;
    case "preparing":
      html.area.preparing.append(newOrder);
      break;
    case "served":
      html.area.served.append(newOrder);
      break;
  }
  html.edit.overlay.close();
};
html.edit.form.addEventListener("submit", handleEditSubmit);

//The handleDelete function is an event handler for the delete event on the "edit order" form.
//It deletes the order object from the state and removes the HTML element for that order
const handleDelete = (event) => {
  event.preventDefault();

  const { id, title, table, created, column } = {
    title: html.edit.title.value,
    table: html.edit.table.value,
    created: new Date(),
    id: state.orders,
    column: html.edit.column.value,
  };
  const order = { id, title, table, created, column };
  //Find the index of the order to be updated
  let orderId = -1; //-1 allows us to check if an order index has been found

  //Find the order element with the new data
  for (let i = 0; i < state.orders.length; i++) {
    if (state.orders[i].id === id) {
      orderId = i;
      break;
    }
  }

  //Delete the order element with the new data
  const neworder = createOrderHtml(order);
  const oldOrder = document.querySelector(`[data-id="${id}"]`);
  oldOrder.remove(neworder);

  html.edit.overlay.close();
};
html.edit.delete.addEventListener("click", handleDelete);



