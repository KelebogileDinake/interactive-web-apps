
import{ createOrderHtml, html, updateDraggingHtml, moveToColumn};

import{COLUMNS, state, updateDragging, createOrderData, TABLES }

// Select the "Add Order" button
const addOrderBtn = document.querySelector('[data-add]');
const tableSelect = document.querySelector('[data-add-table]');

// Add a click event listener to the "Add Order" button
addOrderBtn.addEventListener('click', () => {
  // Show the "Add Order" dialog
  const addOverlay = document.querySelector('[data-add-overlay]');
  addOverlay.showModal();})

  // Clear the input fields of the "Add Order" overlay
  const itemInput = document.querySelector('[data-add-item]');
  const priceInput = document.querySelector('[data-add-price]');
  itemInput.value = '';
  priceInput.value = '';

  // Select the "Add" button in the "Add Order" overlay
  const addBtn = document.querySelector('[data-add-submit]');

  // Add a click event listener to the "Add" button
  addBtn.addEventListener('click', () => {
    // Remove the "Add Order" overlay
    addOverlay.close();})

    // Add a new order to the "Ordered" column
    const orderedColumn = document.querySelector('.ordered-column');
    const order = document.createElement('div');
    order.classList.add('order');
    order.innerHTML = `
      <div class="item">${item}</div>
      <div class="price">$${price}</div>
    `;
    orderedColumn.appendChild(order);
 


       
  // Select the "Cancel" button in the "Add Order" dialog
  const cancelBtn = document.querySelector('[data-add-cancel]');

  // Add a click event listener to the "Cancel" button
  cancelBtn.addEventListener('click', () => {
    // Hide the "Add Order" dialog
    const addOverlay = document.querySelector('[data-add-overlay]');
    addOverlay.close();
  });

  //? button
// Select the "Help" button
const helpBtn = document.querySelector('[data-help]');
const closeBtn = document.querySelector('[data-help-cancel]')

// Add a click event listener to the "Help" button
helpBtn.addEventListener('click', () => {
  // Show the "Help" overlay
  const helpOverlay = document.querySelector('[data-help-overlay]');
  helpOverlay.showModal();

  closeBtn.addEventListener('click', () => {
    helpOverlay.close()

  })
});

