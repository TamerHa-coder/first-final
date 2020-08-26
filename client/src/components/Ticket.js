import React from 'react';



const Tickets = ({id, title,content ,userEmail, creationTime, labels, onHide}) =>{
return(
    <li key={id} className="ticket">
        <span className="ticketOptions">
            <button className="hideTicketButton" onClick={() => onHide(id)}><i className="far fa-eye-slash"></i></button>
        </span>
        <h3 className="title">{title}</h3>
        <p>{content}</p>
        <footer>
        <div className="email">by {userEmail} | { new Date(creationTime).toLocaleString() }</div>
        <div>{labels ? labels.map(label => (<span className="label">{label}</span>)) : undefined}</div>
        </footer>
    </li>
)
}

export default Tickets;