import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductCard } from '~entities/product';

// Define the initial state for the cart slice
const initialState: IProductCard[] = [];

const persistCart = () => {
  // Function to persist cart items in local storage
  localStorage.setItem('cart', JSON.stringify(initialState));
};

// Function to retrieve cart items from local storage (optional)
const loadCartFromStorage = (): IProductCard[] => {
  try {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

    return cartItems;
  } catch (error) {
    console.error('Error loading cart from local storage:', error);

    return [];
  }
};

initialState.push(...loadCartFromStorage());

const addToCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IProductCard>) {
      const existingItem = state.find(item => item.id === action.payload.id);

      if (existingItem) {
        // existingItem.quantity += action.payload.quantity || 1; // Update quantity
      } else {
        state.push(action.payload); // Add new item
      }

      persistCart(); // Persist cart state to local storage
    },
    // removeFromCart(state, action: PayloadAction<string>) {
    //   const itemIndex = state.findIndex(item => item.id === action.payload);

    //   if (itemIndex !== -1) {
    //     state.splice(itemIndex, 1); // Remove item from cart
    //   }

    //   persistCart(); // Persist cart state to local storage
    // },
  },
});

export const { addToCart } = addToCartSlice.actions;

// export const selectCart = (state: RootState) => state.cart.item;

export default addToCartSlice.reducer;
