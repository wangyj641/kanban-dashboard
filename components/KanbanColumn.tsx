'use client';

import { Droppable } from '@hello-pangea/dnd';
import KanbanCard from './KanbanCard';
import { Card } from '@/types/kanban';

interface KanbanColumnProps {
  id: string;
  title: string;
  color: string;
  count: number;
  cards: Card[];
}

export default function KanbanColumn({ 
  id, 
  title, 
  color, 
  count, 
  cards
}: KanbanColumnProps) {
  // 根据列ID设置特定的颜色主题
  const getColumnTheme = () => {
    switch (id) {
      case 'todo':
        return 'bg-purple-500';
      case 'progress':
        return 'bg-orange-500';
      case 'done':
        return 'bg-blue-500';
      default:
        return color;
    }
  };

  return (
    <div className="kanban-column">
      {/* Column Header */}
      <div className="kanban-column-header">
        <div className="kanban-column-title">
          <div className={`kanban-column-dot ${getColumnTheme()}`}></div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <span className="kanban-column-count">{count}</span>
        </div>
         {id === "todo" && (
         <button className="kanban-column-add">
          <span>+</span>
        </button>
        )}        
      </div>

      {/* Cards */}
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`space-y-3 min-h-[400px] ${
              snapshot.isDraggingOver ? 'kanban-column-drag-over' : ''
            }`}
          >
            {cards.map((card, index) => (
              <KanbanCard
                key={card.id}
                {...card}
                index={index}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
