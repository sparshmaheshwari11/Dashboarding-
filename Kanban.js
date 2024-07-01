// src/pages/Kanban.js
import React from 'react';
import { Kanban } from '@atlaskit/kanban';

const initialBoard = {
  lanes: [
    {
      id: 'lane1',
      title: 'To Do',
      cards: [{ id: 'card1', title: 'Task 1', description: 'Task 1 details' }],
    },
    {
      id: 'lane2',
      title: 'In Progress',
      cards: [{ id: 'card2', title: 'Task 2', description: 'Task 2 details' }],
    },
    {
      id: 'lane3',
      title: 'Done',
      cards: [{ id: 'card3', title: 'Task 3', description: 'Task 3 details' }],
    },
  ],
};

const KanbanPage = () => (
  <div>
    <h2>Kanban</h2>
    <Kanban board={initialBoard} />
  </div>
);

export default KanbanPage;
