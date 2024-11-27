import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
        addToBag: (state, action) => {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);

            if (itemIndex >= 0) {
                // If the item is already in the bag, increase its qty
                state[itemIndex].qty += 1;
            } else {
                // If the item is not in the bag, add it with qty 1
                state.push({ ...action.payload, qty: 1 });
            }
        },
        removeFromBag: (state, action) => {
            // Filter out the item by id
            return state.filter(item => item.id !== action.payload.id);
        },
        decreaseQty: (state, action) => {
            const itemIndex = state.findIndex(item => item.id === action.payload.id);

            if (itemIndex >= 0) {
                if (state[itemIndex].qty > 1) {
                    // If the item exists and qty is more than 1, decrease qty
                    state[itemIndex].qty -= 1;
                } else {
                    // If qty is 1, remove the item from the bag
                    return state.filter(item => item.id !== action.payload.id);
                }
            }
        }
    }
});

export const bagActions = bagSlice.actions;
export default bagSlice;
