import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ModalWrapper from '../../../../components/modal/components/modal-wrapper/modal-wrapper';
import Modal from '../../../../components/modal/modal';
import { GuitarTypeInRussian } from '../../../../const';
import { removeProductCart } from '../../../../store/action';
import { Guitar } from '../../../../types/guitar';
import { getFormatPrice } from '../../../../utils/utils';
import DeleteProduct from '../delete-product/delete-product';

type ProductProps = {
  guitar: Guitar,
}

const PRODUCT_COUNT_STEP = 1;

function Product({guitar}: ProductProps): JSX.Element {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [productCount, setProductCount] = useState<number>(1);
  const priceFormatted = getFormatPrice(guitar.price.toString());

  const handleButtonDownClick = () => {
    if (productCount === 1) {
      setOpenModal(true);
      return;
    }
    setProductCount((prevState) => prevState - PRODUCT_COUNT_STEP);
  };
  const handleButtonUpClick = () => {
    setProductCount((prevState) => prevState + PRODUCT_COUNT_STEP);
  };

  return (
    <>
      <div className="cart-item">
        <button
          className="cart-item__close-button button-cross"
          type="button"
          aria-label="Удалить"
          onClick={() => dispatch(removeProductCart(guitar.id))}
        >
          <span className="button-cross__icon"></span>
          <span className="cart-item__close-button-interactive-area"></span>
        </button>
        <div className="cart-item__image">
          <img
            src={guitar.previewImg}
            width="55" height="130"
            alt={`${GuitarTypeInRussian[guitar.type]} ${guitar.name}`}
          />
        </div>
        <div className="product-info cart-item__info">
          <p className="product-info__title">{guitar.name}</p>
          <p className="product-info__info">Артикул: {guitar.vendorCode}</p>
          <p className="product-info__info">{`${GuitarTypeInRussian[guitar.type]}, ${guitar.stringCount} струнная`}</p>
        </div>
        <div className="cart-item__price">{priceFormatted} ₽</div>
        <div className="quantity cart-item__quantity">
          <button
            className="quantity__button"
            aria-label="Уменьшить количество"
            onClick={handleButtonDownClick}
          >
            <svg width="8" height="8" aria-hidden="true">
              <use xlinkHref="#icon-minus"></use>
            </svg>
          </button>
          <input
            className="quantity__input"
            type="number"
            placeholder="1"
            id="2-count"
            name="2-count"
            max="99"
            value={productCount}
          />
          <button
            className="quantity__button"
            aria-label="Увеличить количество"
            onClick={handleButtonUpClick}
          >
            <svg width="8" height="8" aria-hidden="true">
              <use xlinkHref="#icon-plus"></use>
            </svg>
          </button>
        </div>
        <div className="cart-item__price-total">17 500 ₽</div>
      </div>
      {openModal && (
        <Modal>
          <ModalWrapper onClose={() => setOpenModal(false)}>
            <DeleteProduct
              guitar={guitar}
              onClose={() => setOpenModal(false)}
            />
          </ModalWrapper>
        </Modal>
      )}
    </>
  );
}

export default Product;
