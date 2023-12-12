import { Product } from '../../domain/models/product/product';

export function getProducts(quantity: number): Product[] {
  let product = new Product(
    'TEST',
    'Card Test',
    'Generic description',
    'logo.jpg',
    new Date('2023-02-01'),
    new Date('2023-02-01')
  );
  let productArray: Product[] = [];
  for (let index = 0; index < quantity; index++) {
    const element = (product = {
      ...product,
      id: product.id + 1,
      name: product.name + 1,
      description: product.description + 1,
    });
    productArray.push(element);
  }

  return productArray;
}
