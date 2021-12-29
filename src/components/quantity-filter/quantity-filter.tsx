function QuantityFilter(): JSX.Element {
  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Количество струн</legend>
      <div className="form-checkbox catalog-filter__block-item">
        <input className="visually-hidden" type="checkbox" id="4-strings" name="4-strings" checked />
        <label htmlFor="4-strings">4</label>
      </div>
      <div className="form-checkbox catalog-filter__block-item">
        <input className="visually-hidden" type="checkbox" id="6-strings" name="6-strings" checked />
        <label htmlFor="6-strings">6</label>
      </div>
      <div className="form-checkbox catalog-filter__block-item">
        <input className="visually-hidden" type="checkbox" id="7-strings" name="7-strings" />
        <label htmlFor="7-strings">7</label>
      </div>
      <div className="form-checkbox catalog-filter__block-item">
        <input className="visually-hidden" type="checkbox" id="12-strings" name="12-strings" disabled />
        <label htmlFor="12-strings">12</label>
      </div>
    </fieldset>
  );
}

export default QuantityFilter;