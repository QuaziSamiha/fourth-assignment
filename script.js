// function for calculating total cost of tickets
function calculateCost() {
    const firstClassCost = parseInt(document.getElementById('first-class-cost').innerText);
    const economyClassCost = parseInt(document.getElementById('economy-class-cost').innerText);

    const subTotal = firstClassCost + economyClassCost; // calculating total cost without vat
    document.getElementById('sub-total').innerText = subTotal;
    const total = (subTotal * 110) / 100; // as 10% is vat
    document.getElementById('total').innerText = total;
    const vat = total - subTotal; // calculating vat
    document.getElementById('vat').innerText = vat;
}

// function for plus button of first class and economy class tickets
function addButton(buttonId, ticketNumber, perTicket, ticketCost) {
    document.getElementById(buttonId).addEventListener('click', function () {
        const ticketNo = document.getElementById(ticketNumber).value; // number of tickets in string
        const totalTicket = parseInt(ticketNo) + 1; // it will increase number of ticket one by one
        document.getElementById(ticketNumber).value = totalTicket; // total number of ticket

        const totalCost = totalTicket * perTicket; // total cost for total tickets
        document.getElementById(ticketCost).innerText = totalCost;

        calculateCost(); // calling function for calculating total cost 
    })
}


// function for minus button for first class and economy class tickets
function subtractButton(buttonId, ticketNumber, perTicket, ticketCost) {
    document.getElementById(buttonId).addEventListener('click', function () {
        const ticketNo = document.getElementById(ticketNumber).value;
        const totalTicket = parseInt(ticketNo) - 1;
        if (totalTicket >= 0) {
            document.getElementById(ticketNumber).value = totalTicket;

            const totalCost = totalTicket * perTicket;
            document.getElementById(ticketCost).innerText = totalCost;
        }
        calculateCost(); // calling function for calculating total cost 
    })
}

addButton('add-first-class', 'first-ticket-no', 150, 'first-class-cost'); // for plus button in case of first class ticket
subtractButton('sub-first-class', 'first-ticket-no', 150, 'first-class-cost'); // for minus button in case of first class ticket

addButton('add-economy-class', 'economy-ticket-no', 100, 'economy-class-cost'); // for plus button in case of economy class ticket
subtractButton('sub-economy-class', 'economy-ticket-no', 100, 'economy-class-cost'); // for plus button in case of economy class ticket


// event handler for Book Now button
document.getElementById('book-btn').addEventListener('click', function () {
    const total = document.getElementById('total').innerText;
    const firstClassTicket = document.getElementById('first-ticket-no').value;
    console.log(firstClassTicket);
    const economyClassTicket = document.getElementById('economy-ticket-no').value;
    confirm("You have purchased " + firstClassTicket + " first class tickets and "+ economyClassTicket +" economy class tickets.\nYour total cost is "+ total +".\nAre you sure about booking?");
})




