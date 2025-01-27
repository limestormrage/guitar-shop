import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';
import { Comment, Guitar, Guitars } from '../types/guitar';

export const loadGuitarsRequest = createAction(ActionType.LoadGuitarsRequest);

export const loadGuitarsSuccess = createAction(
  ActionType.LoadGuitarsSuccess,
  (guitars: Guitars, count: number | string) => ({
    payload: {
      guitars,
      count,
    },
  }),
);

export const loadPlaceholdersPriceRequest = createAction(ActionType.LoadPlaceholdersPriceRequest);

export const loadPlaceholdersPriceSuccess = createAction(
  ActionType.LoadPlaceholdersPriceSuccess,
  (guitars: Guitars) => ({
    payload: {
      guitars,
    },
  }),
);

export const loadPlaceholdersPriceError = createAction(ActionType.LoadPlaceholdersPriceError);

export const loadGuitarsError = createAction(ActionType.LoadGuitarsError);

export const loadSearchGuitarsRequest = createAction(ActionType.LoadSearchGuitarsRequest);

export const loadSearchGuitarsSuccess = createAction(
  ActionType.LoadSearchGuitarsSuccess,
  (searchGuitars: Guitars) => ({
    payload: {
      searchGuitars,
    },
  }),
);

export const resetSearchGuitars = createAction(ActionType.ResetSearchGuitars);

export const loadSearchGuitarsError = createAction(ActionType.LoadSearchGuitarsError);

export const setCurrentPage = createAction(
  ActionType.SetCurrentPage,
  (page: number) => ({
    payload: {
      page,
    },
  }),
);

export const loadGuitarRequest = createAction(ActionType.LoadGuitarRequest);

export const loadGuitarSuccess = createAction(
  ActionType.LoadGuitarSuccess,
  (guitar: Guitar) => ({
    payload: {
      guitar,
    },
  }),
);

export const loadGuitarError = createAction(ActionType.LoadGuitarError);

export const setModalStatus = createAction(
  ActionType.SetModalStatus,
  (status: boolean) => ({
    payload: {
      status,
    },
  }),
);

export const sendCommentRequest = createAction(ActionType.SendCommentRequest);

export const sendCommentSuccess = createAction(
  ActionType.SendCommentSuccess,
  (comment: Comment) => ({
    payload: {
      comment,
    },
  }),
);

export const addProductCart = createAction(
  ActionType.AddProductCart,
  (product: Guitar) => ({
    payload: {
      product,
    },
  }),
);

export const setGuitarCount = createAction(
  ActionType.SetGuitarCount,
  (guitar: Guitar, count: number) => ({
    payload: {
      guitar,
      count,
    },
  }),
);

export const removeProductCart = createAction(
  ActionType.RemoveProductCart,
  (id: number) => ({
    payload: {
      id,
    },
  }),
);

export const sendCommentError = createAction(ActionType.SendCommentError);

export const resetCommentPostStatus = createAction(ActionType.ResetCommentPostStatus);

export const resetProduct = createAction(ActionType.ResetProduct);

export const sendCouponRequest = createAction(ActionType.SendCouponRequest);

export const sendCouponSuccess = createAction(
  ActionType.SendCouponSuccess,
  (discount: string) => ({
    payload: {
      discount,
    },
  }),
);

export const sendCouponError = createAction(ActionType.SendCouponError);
