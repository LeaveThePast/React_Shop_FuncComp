const ShopItemFunc = (props) => {
    const {item} = props;
    const addToCartText = 'Добавить в корзину';

    return (
        <article className="main-content">
            <h2>{item.brand}</h2>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <section className="description">
                {item.descriptionFull}
            </section>
            <section className="purchase-info">
                <div className="price">{item.currency}{item.price}</div>
                <button>{addToCartText}</button>
            </section>
        </article>
    );
};

export default ShopItemFunc;