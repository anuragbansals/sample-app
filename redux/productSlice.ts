import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export interface ProductItem {
  category: string;
  description: string;
  id: number;
  images: Array<string>;
  price: number;
  title: string;
  thumbnail: string;
}

export interface CartItem {
  item: ProductItem;
  count: number;
}

export interface Products {
  products: Array<ProductItem>;
  loading: boolean;
  error: any;
}

const initialState: Products = {
  products: [],
  error: null,
  loading: false,
};

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await axios.get('https://dummyjson.com/products?limit=10');
    return response.data;
  },
);

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProducts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload.products;
        state.loading = false;
      })
      .addCase(getProducts.pending, state => {
        state.loading = true;
        state.error = null;
      });
  },
});

export const {} = ProductSlice.actions;

export default ProductSlice.reducer;
