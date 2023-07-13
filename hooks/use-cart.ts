import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { toast } from 'react-hot-toast';

import { Product } from '@/types';

type CartStore = {
	items: Product[];
	addItem: (data: Product) => void;
	removeItem: (id: string) => void;
	removeAll: () => void;
};

const useCart = create(
	persist<CartStore>(
		(set, get) => ({
			items: [],
			addItem: (data) => {
				const { items } = get();

				if (items.find((item) => item.id === data.id))
					return toast('Item already in cart.');

				set({ items: [...items, data] });
				toast.success('Item added to cart.');
			},
			removeItem: (id) => {
				set({ items: get().items.filter((item) => item.id !== id) });
				toast.success('Item removed from the cart.');
			},
			removeAll: () => set({ items: [] }),
		}),
		{ name: 'cart-storage', storage: createJSONStorage(() => localStorage) }
	)
);

export default useCart;
