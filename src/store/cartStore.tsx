import { create } from "zustand";

interface CartState {
  count: number;

  items: Record<string, number>;

  addItem: (id: string) => void;
}

export const useCartStore =
  create<CartState>((set) => ({
    count: 0,

    items: {},

    addItem: (id) =>
      set((state) => ({
        count: state.count + 1,

        items: {
          ...state.items,
          [id]:
            (state.items[id] ?? 0) + 1,
        },
      })),
      removeItem: (id: string) =>
  set((state) => {
    const current =
      state.items[id] ?? 0;

    if (current <= 0)
      return state;

    return {
      items: {
        ...state.items,
        [id]: current - 1,
      },

      count:
        state.count - 1,
    };
  }),
  }));
  