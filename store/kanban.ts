"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { BoardState, Card, AssignedUser } from "@/types/kanban";

const initial: BoardState = {
  columns: [
    {
      id: "todo",
      title: "To Do",
      color: "bg-purple-500",
      count: 4,
      cards: [
        {
          id: "1",
          title: "Brainstorming",
          description: "Brainstorming brings team members' diverse experience into play.",
          priority: "low",
          assigned: [
            { id: "1", name: "John", avatar: "J", color: "bg-blue-500" },
            { id: "2", name: "Sarah", avatar: "S", color: "bg-green-500" },
          ],
          comments: 12,
          files: 0,
        },
        {
          id: "2",
          title: "Research",
          description: "User research helps you to create an optimal product for users.",
          priority: "high",
          assigned: [
            { id: "1", name: "John", avatar: "J", color: "bg-blue-500" },
            { id: "2", name: "Sarah", avatar: "S", color: "bg-green-500" },
          ],
          comments: 10,
          files: 3,
        },
        {
          id: "3",
          title: "Wireframes",
          description: "Low fidelity wireframes include the most basic content and visuals.",
          priority: "high",
          assigned: [
            { id: "1", name: "John", avatar: "J", color: "bg-blue-500" },
            { id: "2", name: "Sarah", avatar: "S", color: "bg-green-500" },
          ],
          comments: 10,
          files: 3,
        },
        {
          id: "4",
          title: "User Stories",
          description: "Define user stories and requirements",
          priority: "low",
          assigned: [
            { id: "3", name: "Mike", avatar: "M", color: "bg-purple-500" },
          ],
          comments: 8,
          files: 2,
        },
      ],
    },
    {
      id: "progress",
      title: "On Progress",
      color: "bg-orange-500",
      count: 3,
      cards: [
        {
          id: "5",
          title: "Onboarding Illustrations",
          description: "Design onboarding flow illustrations",
          priority: "low",
          image: true,
          assigned: [
            { id: "1", name: "John", avatar: "J", color: "bg-blue-500" },
            { id: "2", name: "Sarah", avatar: "S", color: "bg-green-500" },
            { id: "3", name: "Mike", avatar: "M", color: "bg-purple-500" },
          ],
          comments: 14,
          files: 15,
        },
        {
          id: "6",
          title: "Moodboard",
          description: "Create design moodboard and inspiration",
          priority: "low",
          image: true,
          assigned: [
            { id: "2", name: "Sarah", avatar: "S", color: "bg-green-500" },
          ],
          comments: 9,
          files: 10,
        },
        {
          id: "7",
          title: "Icon Design",
          description: "Design custom icons for the app",
          priority: "high",
          assigned: [
            { id: "1", name: "John", avatar: "J", color: "bg-blue-500" },
          ],
          comments: 7,
          files: 5,
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      color: "bg-blue-500",
      count: 2,
      cards: [
        {
          id: "8",
          title: "Mobile App Design",
          description: "Complete mobile app design with all screens",
          status: "completed",
          image: true,
          assigned: [
            { id: "1", name: "John", avatar: "J", color: "bg-blue-500" },
            { id: "2", name: "Sarah", avatar: "S", color: "bg-green-500" },
          ],
          comments: 12,
          files: 15,
        },
        {
          id: "9",
          title: "Design System",
          description: "It just needs to adapt the UI from what you did before.",
          status: "completed",
          assigned: [
            { id: "1", name: "John", avatar: "J", color: "bg-blue-500" },
            { id: "2", name: "Sarah", avatar: "S", color: "bg-green-500" },
            { id: "3", name: "Mike", avatar: "M", color: "bg-purple-500" },
          ],
          comments: 12,
          files: 15,
        },
      ],
    },
  ],
};

type Actions = {
  moveCard: (cardId: string, from: string, to: string, toIndex: number) => void;
  reorderCardInSameColumn: (colId: string, startIndex: number, endIndex: number) => void;
  addCard: (colId: string, card: Card) => void;
};

export const useKanban = create<BoardState & Actions>()(
  persist(
    (set, get) => ({
      ...initial,
      moveCard: (cardId, from, to, toIndex) => set(state => {
        if (from === to) return state;
        
        const fromColumn = state.columns.find(col => col.id === from);
        const toColumn = state.columns.find(col => col.id === to);
        
        if (!fromColumn || !toColumn) return state;
        
        const fromCards = fromColumn.cards.filter(card => card.id !== cardId);
        const toCards = [...toColumn.cards];
        const movedCard = fromColumn.cards.find(card => card.id === cardId);
        
        if (!movedCard) return state;
        
        toCards.splice(toIndex, 0, movedCard);
        
        return {
          ...state,
          columns: state.columns.map(col => {
            if (col.id === from) {
              return { ...col, cards: fromCards, count: fromCards.length };
            }
            if (col.id === to) {
              return { ...col, cards: toCards, count: toCards.length };
            }
            return col;
          }),
        };
      }),
      reorderCardInSameColumn: (colId, startIndex, endIndex) => set(state => {
        return {
          ...state,
          columns: state.columns.map(col => {
            if (col.id === colId) {
              const cards = [...col.cards];
              const [removed] = cards.splice(startIndex, 1);
              cards.splice(endIndex, 0, removed);
              return { ...col, cards, count: cards.length };
            }
            return col;
          }),
        };
      }),
      addCard: (colId, card) => set(state => {
        return {
          ...state,
          columns: state.columns.map(col => {
            if (col.id === colId) {
              return { ...col, cards: [card, ...col.cards], count: col.cards.length + 1 };
            }
            return col;
          }),
        };
      }),
    }),
    { name: "kanban-board" }
  )
);
