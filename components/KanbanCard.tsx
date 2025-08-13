'use client';

import { Draggable } from '@hello-pangea/dnd';
import Image from 'next/image';

interface KanbanCardProps {
  id: string;
  title: string;
  description?: string;
  priority?: 'low' | 'high';
  status?: 'completed';
  image?: boolean;
  assigned: Array<{ id: string; name: string; avatar: string; color: string }>;
  comments: number;
  files: number;
  index: number;
}

export default function KanbanCard({
  id,
  title,
  description,
  priority,
  status,
  image,
  assigned,
  comments,
  files,
  index,
}: KanbanCardProps) {
  const getPriorityClass = () => {
    if (status === 'completed') return 'status-completed';
    if (priority === 'high') return 'priority-high';
    if (priority === 'low') return 'priority-low';
    return 'priority-low';
  };

  const getPriorityText = () => {
    if (status === 'completed') return 'Completed';
    if (priority === 'high') return 'High';
    if (priority === 'low') return 'Low';
    return 'Low';
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`kanban-card ${snapshot.isDragging ? 'dragging' : ''}`}
        >
          <div className="kanban-card-content">
            {/* Priority/Status Tag and Menu */}
            <div className="kanban-card-header">
              <span className={`priority-tag ${getPriorityClass()}`}>{getPriorityText()}</span>
              <button className="btn-icon bg-transparent focus:outline-none border-none">⋯</button>
            </div>

            {/* Title */}
            <h3 className="kanban-card-title">{title}</h3>

            {/* Description */}
            {description && <p className="kanban-card-description">{description}</p>}

            {/* Image */}
            {image && (
              <div className="kanban-card-image">
                {id === '3' ? (
                  <Image src="/images/flower1.png" alt="Logo" width={281} height={110} />
                ) : id === '5' ? (
                  <Image src="/images/flower1.png" alt="Logo" width={281} height={110} />
                ) : id === '6' ? (
                  <Image src="/images/flower1.png" alt="Logo" width={281} height={110} />
                ) : id === '8' ? (
                  <Image src="/images/flower1.png" alt="Logo" width={281} height={110} />
                ) : (
                  <Image src="/images/flower1.png" alt="Logo" width={281} height={110} />
                )}
              </div>
            )}

            {/* Assigned Members */}
            <div className="kanban-card-members">
              {assigned.map((member) => (
                <div
                  key={member.id}
                  className={`kanban-card-member ${member.color}`}
                  title={member.name}
                >
                  {member.avatar}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="kanban-card-stats">
              <span className="kanban-card-stat">
                <Image src="/images/mesg1.png" alt="Logo" width={16} height={16} />
                {comments} comments
              </span>
              <span className="kanban-card-stat">
                <Image src="/images/mesg1.png" alt="Logo" width={16} height={16} />
                {files} files
              </span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
