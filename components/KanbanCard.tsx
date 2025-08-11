'use client';

import { Draggable } from '@hello-pangea/dnd';

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
              <button className="btn-icon">⋯</button>
            </div>

            {/* Title */}
            <h3 className="kanban-card-title">{title}</h3>

            {/* Description */}
            {description && <p className="kanban-card-description">{description}</p>}

            {/* Image */}
            {image && (
              <div className="kanban-card-image">
                {id === '5' ? (
                  <span>🌸 Pink Flowers</span>
                ) : id === '6' ? (
                  <span>🌿 Indoor Plant</span>
                ) : id === '8' ? (
                  <span>📱 Mobile Screens</span>
                ) : (
                  <span>📷 Image</span>
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
              <span className="kanban-card-stat">💬 {comments} comments</span>
              <span className="kanban-card-stat">📎 {files} files</span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
