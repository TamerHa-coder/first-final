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



module.exports = app;