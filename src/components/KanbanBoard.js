// src/components/KanbanBoard.js
import React, { useState, useEffect } from 'react';
import { fetchTickets } from '../services/api';
import TicketCard from './TicketCard';
import Header from './Header';
import './KanbanBoard.css';
import TicketDetails from './TicketDetails';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'priority');
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTickets();
      setTickets(data.tickets);
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('sortBy', sortBy);
  }, [grouping, sortBy]);

  const groupedTickets = groupTickets(tickets, grouping);
  const sortedTickets = sortTickets(groupedTickets, sortBy);

  return (
    <div className="kanban-board">
      <Header setGrouping={setGrouping} setSortBy={setSortBy} />
      {selectedTicket ? (
        <TicketDetails ticket={selectedTicket} setSelectedTicket={setSelectedTicket} />
      ) : (
        renderGroupedTickets(sortedTickets, grouping, setSelectedTicket)
      )}
    </div>
  );
};

const groupTickets = (tickets, grouping) => {
  return tickets.reduce((acc, ticket) => {
    let key;
    if (grouping === 'status') key = ticket.status;
    if (grouping === 'user') key = ticket.userId;
    if (grouping === 'priority') key = ticket.priority;
    acc[key] = acc[key] || [];
    acc[key].push(ticket);
    return acc;
  }, {});
};

const sortTickets = (tickets, sortBy) => {
  const sorted = {};
  for (const group in tickets) {
    sorted[group] = [...tickets[group]].sort((a, b) => {
      if (sortBy === 'priority') return b.priority - a.priority;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  }
  return sorted;
};

const renderGroupedTickets = (tickets, grouping, setSelectedTicket) => {
  return Object.keys(tickets).map((group) => (
    <div key={group} className="group">
      <h2>{grouping === 'user' ? `User: ${group}` : group}</h2>
      {tickets[group].map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} setSelectedTicket={setSelectedTicket} />
      ))}
    </div>
  ));
};

export default KanbanBoard;
