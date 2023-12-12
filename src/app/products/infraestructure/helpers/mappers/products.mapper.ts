import { Product } from 'src/app/products/domain/models/product/product';
import { ProductDTO } from './../../dto/produdct.dto';

export class ProductMapper {
  static fromApiToDomain(apiProduct: ProductDTO): Product {
    return {
      id: apiProduct.id,
      name: apiProduct.name,
      description: apiProduct.description,
      logo: apiProduct.logo,
      date_release: apiProduct.date_release,
      date_revision: apiProduct.date_revision,
    };
  }

  static fromDomainToApi(domainProduct: Product): ProductDTO {
    return {
      id: domainProduct.id,
      name: domainProduct.name,
      description: domainProduct.description,
      logo: domainProduct.logo,
      date_release: domainProduct.date_release,
      date_revision: domainProduct.date_revision,
    };
  }
}
