import product from 'app/entities/productservice/product/product.reducer';
import productCategory from 'app/entities/productservice/product-category/product-category.reducer';
import productImage from 'app/entities/productservice/product-image/product-image.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  product,
  productCategory,
  productImage,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
