document.addEventListener("DOMContentLoaded", function () {
    // Family Ticket
    var familyTicketAddButton = document.querySelector('#familyTicketAdd');
    familyTicketAddButton.addEventListener("click", function () {
        var quantityInput = document.querySelector('#familyTicket');
        var orderedItemsTableBody = document.querySelector('#orderTable tbody');
        var newRow = document.createElement('tr');
        var descriptionCell = document.createElement('td');
        var quantityCell = document.createElement('td');
        descriptionCell.textContent = "Family";
        quantityCell.textContent = quantityInput.value;
        newRow.appendChild(descriptionCell);
        newRow.appendChild(quantityCell);
        orderedItemsTableBody.appendChild(newRow);
        recal(); 
    });

    // Friends Ticket
    var friendsTicketAddButton = document.querySelector('#friendsTicketAdd');
    friendsTicketAddButton.addEventListener("click", function () {
        var quantityInput = document.querySelector('#friendsTicket');
        var orderedItemsTableBody = document.querySelector('#orderTable tbody');
        var newRow = document.createElement('tr');
        var descriptionCell = document.createElement('td');
        var quantityCell = document.createElement('td');
        descriptionCell.textContent = "Friends";
        quantityCell.textContent = quantityInput.value;
        newRow.appendChild(descriptionCell);
        newRow.appendChild(quantityCell);
        orderedItemsTableBody.appendChild(newRow);
        recal(); 
    });

    // Concessions Ticket
    var concessionsTicketAddButton = document.querySelector('#ConcessionsAdd');
    concessionsTicketAddButton.addEventListener("click", function () {
        var quantityInput = document.querySelector('#concessionsTicket');
        var orderedItemsTableBody = document.querySelector('#orderTable tbody');
        var newRow = document.createElement('tr');
        var descriptionCell = document.createElement('td');
        var quantityCell = document.createElement('td');
        descriptionCell.textContent = "Concession";
        quantityCell.textContent = quantityInput.value;
        newRow.appendChild(descriptionCell);
        newRow.appendChild(quantityCell);
        orderedItemsTableBody.appendChild(newRow);
        recal(); 
    });

    // Hot Dogs & Fries Ticket
    var hotDogsFriesAddButton = document.querySelector('#HotDogsFriesAdd');
    hotDogsFriesAddButton.addEventListener("click", function () {
        var quantityInput = document.querySelector('#hotDogsTicket');
        var orderedItemsTableBody = document.querySelector('#orderTable tbody');
        var newRow = document.createElement('tr');
        var descriptionCell = document.createElement('td');
        var quantityCell = document.createElement('td');
        descriptionCell.textContent = "Hot Dogs & Fries";
        quantityCell.textContent = quantityInput.value;
        newRow.appendChild(descriptionCell);
        newRow.appendChild(quantityCell);
        orderedItemsTableBody.appendChild(newRow);
        recal(); 
    });

    // Big Gulp Ticket
    var bigGulpAddButton = document.querySelector('#BigGulpAdd');
    bigGulpAddButton.addEventListener("click", function () {
        var quantityInput = document.querySelector('#bigGulpTicket');
        var orderedItemsTableBody = document.querySelector('#orderTable tbody');
        var newRow = document.createElement('tr');
        var descriptionCell = document.createElement('td');
        var quantityCell = document.createElement('td');
        descriptionCell.textContent = "Big Gulp";
        quantityCell.textContent = quantityInput.value;
        newRow.appendChild(descriptionCell);
        newRow.appendChild(quantityCell);
        orderedItemsTableBody.appendChild(newRow);
        recal();
    });

    // Family Hotel
    var familyHotelAddButton = document.querySelector('#FamilyHotelAdd');
    familyHotelAddButton.addEventListener("click", function () {
        var quantityInput = document.querySelector('#FamilyHotel');
        var orderedItemsTableBody = document.querySelector('#orderTable tbody');
        var newRow = document.createElement('tr');
        var descriptionCell = document.createElement('td');
        var quantityCell = document.createElement('td');
        descriptionCell.textContent = "Family Hotel";
        quantityCell.textContent = quantityInput.value;
        newRow.appendChild(descriptionCell);
        newRow.appendChild(quantityCell);
        orderedItemsTableBody.appendChild(newRow);
        recal(); 
    });

    // Twin Beds Hotel
    var twinBedsHotelAddButton = document.querySelector('#TwinBedsHotelAdd');
    twinBedsHotelAddButton.addEventListener("click", function () {
        var quantityInput = document.querySelector('#TwinBedsHotel');
        var orderedItemsTableBody = document.querySelector('#orderTable tbody');
        var newRow = document.createElement('tr');
        var descriptionCell = document.createElement('td');
        var quantityCell = document.createElement('td');
        descriptionCell.textContent = "Twin Beds Hotel";
        quantityCell.textContent = quantityInput.value;
        newRow.appendChild(descriptionCell);
        newRow.appendChild(quantityCell);
        orderedItemsTableBody.appendChild(newRow);
        recal(); 
    });

    // Super Suit Hotel
    var superSuitHotelAddButton = document.querySelector('#SuperSuitHotelAdd');
    superSuitHotelAddButton.addEventListener("click", function () {
        var quantityInput = document.querySelector('#SuperSuitHotel');
        var orderedItemsTableBody = document.querySelector('#orderTable tbody');
        var newRow = document.createElement('tr');
        var descriptionCell = document.createElement('td');
        var quantityCell = document.createElement('td');
        descriptionCell.textContent = "Super Suit Hotel";
        quantityCell.textContent = quantityInput.value;
        newRow.appendChild(descriptionCell);
        newRow.appendChild(quantityCell);
        orderedItemsTableBody.appendChild(newRow);
        recal(); 
    });
    //Mickys Room
    var mickeysRoomAddButton = document.querySelector('#MikeysHotelAdd');
    mickeysRoomAddButton.addEventListener("click", function () {
        var quantityInput = document.querySelector('#mickeysRoom');
        var orderedItemsTableBody = document.querySelector('#orderTable tbody');
        var newRow = document.createElement('tr');
        var descriptionCell = document.createElement('td');
        var quantityCell = document.createElement('td');
        descriptionCell.textContent = "Mickeys Room";
        quantityCell.textContent = quantityInput.value;
        newRow.appendChild(descriptionCell);
        newRow.appendChild(quantityCell);
        orderedItemsTableBody.appendChild(newRow);
        recal(); 
    });

    var undoButton = document.getElementById("undoButton");
    undoButton.addEventListener("click", function () {
        var orderedItemsTableBody = document.querySelector('#orderTable tbody');
        var lastRow = orderedItemsTableBody.lastElementChild;
        if (lastRow) {
            orderedItemsTableBody.removeChild(lastRow);
            recal(); 
        }
    });

    function recal() {
        var orderedItemsTableBody = document.querySelector('#orderTable tbody');
        var totalQuantity = 0;
        var rows = orderedItemsTableBody.querySelectorAll('tr');
        rows.forEach(function (row) {
            var quantityCell = row.querySelector('td:last-child');
            if (quantityCell) {
                totalQuantity += parseInt(quantityCell.textContent);
            }
        });
        var totalCell = document.getElementById('total');
        totalCell.textContent = totalQuantity;
    }

     var currentTime = new Date();     

     var timeTag = document.getElementById("time");
     timeTag.innerText = currentTime.toString();
});
