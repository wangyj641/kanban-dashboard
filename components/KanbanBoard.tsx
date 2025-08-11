'use client';

import { useEffect } from 'react';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import KanbanColumn from './KanbanColumn';
import { ColumnId } from '@/types/kanban';
import { useKanban } from '@/store/kanban';

export default function KanbanBoard() {
  const { columns, moveCard, reorderCardInSameColumn } = useKanban();

  // 初始化数据到store
  useEffect(() => {
    // 这里可以添加初始化逻辑
  }, []);

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    // 如果没有目标位置，不做任何操作
    if (!destination) return;

    const sourceColumnId = source.droppableId as ColumnId;
    const destinationColumnId = destination.droppableId as ColumnId;
    const cardId = draggableId;

    // 如果是在同一列内重新排序
    if (sourceColumnId === destinationColumnId) {
      reorderCardInSameColumn(sourceColumnId, source.index, destination.index);
    } else {
      // 如果是移动到不同的列
      moveCard(cardId, sourceColumnId, destinationColumnId, destination.index);
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex gap-col-gap overflow-x-auto pb-6 pl-8 md:pl-12 lg:pl-16 min-w-0">
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
