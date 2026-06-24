import { create } from "zustand";

interface CartState {
  items: Record<string, number>;

  count: number;

  total: number;

  addItem: (
    id: string,
    price: number
  ) => void;

  removeItem: (
    id: string,
    price: number
  ) => void;
}

export const useCartStore =
  create<CartState>((set) => ({
    items: {},

    count: 0,

    total: 0,

    addItem: (id, price) =>
      set((state) => ({
        items: {
          ...state.items,
          [id]:
            (state.items[id] ?? 0) + 1,
        },

        count:
          state.count + 1,

        total:
          state.total + price,
      })),

    removeItem: (id, price) =>
      set((state) => {
        const current =
          state.items[id] ?? 0;

        if (current === 0) {
          return state;
        }

        return {
          items: {
            ...state.items,
            [id]: current - 1,
          },

          count:
            state.count - 1,

          total:
            state.total - price,
        };
      }),
  }));