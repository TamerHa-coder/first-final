const express = require('express');
const app = express();
const fs = require('fs').promises;
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('',  (req, res) => {    
    res.send('Hello');
})

app.get('/api/tickets', async (req, res) => {
    const content = await fs.readFile('./data.json');
    const tickets = JSON.parse(content);
    const query = req.query.searchText;
    if (!query){
        res.send(tickets);
    }
     else{
        queryTickets = tickets.filter((ticket) => ((ticket.title).toLowerCase()).includes(query));
        res.send(queryTickets);
    }
})

app.post('/api/tickets/:ticketId/done', async (req, res) => {
    let content = await fs.readFile('./data.json');
    const tickets = JSON.parse(content);
    const index = tickets.findIndex(ticket => ticket.id === req.params.ticketId);
    if(index >= 0){
        tickets[index].done = true;
        content = JSON.stringify(tickets, null, 2);
        await fs.writeFile('./data.json', content);
        res.send(tickets[index]);
    } else {
        res.send('Error');
    }

})

app.post('/api/tickets/:ticketId/undone', async (req, res) => {
    let content = await fs.readFile('./data.json');
    const tickets = JSON.parse(content);
    const index = tickets.findIndex(ticket => ticket.id === req.params.ticketId);
    if(index >= 0){
        tickets[index].done = false;
        content = JSON.stringify(tickets, null, 2);
        await fs.writeFile('./data.json', content);
        res.send(tickets[index]);
    } else {
        res.send('Error');
    }

})



module.exports = app;