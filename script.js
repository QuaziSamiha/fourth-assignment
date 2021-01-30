function addButton(buttonId, ticketNumber, perTicket, ticketCost){
    document.getElementById(buttonId).addEventListener('click', function(){
        const ticketNo = document.getElementById(ticketNumber).value; // number of tickets in string
        const totalTicket = parseInt(ticketNo) + 1; // increase number of ticket one by one
        document.getElementById(ticketNumber).value = totalTicket;
    
        const totalCost = totalTicket * perTicket;
        document.getElementById(ticketCost).innerText = totalCost;
    })    
}

addButton('add-first-class', 'first-ticket-no', 150, 'first-class-cost');
addButton('add-economy-class', 'economy-ticket-no', 100, 'economy-class-cost');




// const addBtn = document.getElementById('add-first-class');
// addBtn.addEventListener('click', function(){
//     const ticketNo = document.getElementById('first-class').value;
//     const ticketNumber = parseInt(ticketNo);
//     const totalTicket = ticketNumber + 1;
//     document.getElementById('first-class').value = totalTicket;
// })
