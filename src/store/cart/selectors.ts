import { GuitarsCart } from '../../types/guitar';
import { State } from '../../types/state';
import { NameSpace } from '../root-reducer';

export const getCurrentProduct = (state: State): GuitarsCart => state[NameSpace.Cart].currentProduct;
export const getDiscount = (state: State): null | string => state[NameSpace.Cart].discount;
