// src/components/TicketDetails.js
import React from 'react';
import './TicketDetails.css';

const TicketDetails = ({ ticket, setSelectedTicket }) => {
  return (
    <div className="ticket-details">
      <h2>{ticket.title}</h2>
      <p><strong>Status:</strong> {ticket.status}</p>
      <p><strong>Priority:</strong> {ticket.priority}</p>
      <p><strong>Assigned User:</strong> {ticket.userId}</p>
      <button onClick={() => setSelectedTicket(null)}>Back to Board</button>
    </div>
  );
};

export default TicketDetails;
