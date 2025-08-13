'use client';

import { useEffect } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import KanbanColumn from './KanbanColumn';
import { ColumnId } from '@/types/kanban';
import { useKanban } from '@/store/kanban';

export default function KanbanBoard() {
  const { columns, moveCard, reorderCardInSameColumn } = useKanban();

  // Initialize data to store
  useEffect(() => {
    // Initialization logic can be added here
  }, []);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    // Do nothing if there is no destination
    if (!destination) return;

    const sourceColumnId = source.droppableId as ColumnId;
    const destinationColumnId = destination.droppableId as ColumnId;
    const cardId = draggableId;

    // Reorder within the same column
    if (sourceColumnId === destinationColumnId) {
      reorderCardInSameColumn(sourceColumnId, source.index, destination.index);
    } else {
      // Move to a different column
      moveCard(cardId, sourceColumnId, destinationColumnId, destination.index);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-col-gap overflow-x-auto pb-6 min-w-0">
        {columns.map((column) => (
          <KanbanColumn
            key={column.id}
            id={column.id}
            title={column.title}
            color={column.color}
            count={column.count}
            cards={column.cards}
          />
        ))}
      </div>
    </DragDropContext>
  );
}
