// src/components/TicketCard.js
import React from 'react';
import './TicketCard.css';

// Importing the priority icons and status icons
import urgentIcon from '../assets/icons/SVG - Urgent Priority colour.svg';
import highPriorityIcon from '../assets/icons/Img - High Priority.svg';
import mediumPriorityIcon from '../assets/icons/Img - Medium Priority.svg';
import lowPriorityIcon from '../assets/icons/Img - Low Priority.svg';
import noPriorityIcon from '../assets/icons/No-priority.svg';
import inProgressIcon from '../assets/icons/in-progress.svg';
import backlogIcon from '../assets/icons/Backlog.svg';
import toDoIcon from '../assets/icons/To-do.svg';
import doneIcon from '../assets/icons/Done.svg';
import cancelledIcon from '../assets/icons/Cancelled.svg';
import downIcon from '../assets/icons/down.svg';

const TicketCard = ({ ticket, setSelectedTicket }) => {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4:
        return <img src={urgentIcon} alt="Urgent" />;
      case 3:
        return <img src={highPriorityIcon} alt="High Priority" />;
      case 2:
        return <img src={mediumPriorityIcon} alt="Medium Priority" />;
      case 1:
        return <img src={lowPriorityIcon} alt="Low Priority" />;
      case 0:
      default:
        return <img src={noPriorityIcon} alt="No Priority" />;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Todo':
        return <img src={toDoIcon} alt="To-do" />;
      case 'In progress':
        return <img src={inProgressIcon} alt="In Progress" />;
      case 'Backlog':
        return <img src={backlogIcon} alt="Backlog" />;
      case 'Done':
        return <img src={doneIcon} alt="Done" />;
      case 'Cancelled':
        return <img src={cancelledIcon} alt="Cancelled" />;
      default:
        return <img src={downIcon} alt="Unknown Status" />;
    }
  };

  return (
    <div className="ticket-card" onClick={() => setSelectedTicket(ticket)}>
      <h3>{ticket.title}</h3>
      <div className="ticket-info">
        <span>{getPriorityIcon(ticket.priority)}</span>
        <span>{getStatusIcon(ticket.status)}</span>
      </div>
    </div>
  );
};

export default TicketCard;
