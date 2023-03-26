import Card from '../Card';
import * as S from './styles';

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

interface ProductListProps {
  products: Product[];
}

function ProductList({ products }: ProductListProps): JSX.Element {
  return (
    <div>
      <S.WrapperCard>
        {products.map(product => (
          <Card
            key={product.id}
            title={product.name}
            description={product.description}
            imageSrc={product.imageUrl}
          />
        ))}
      </S.WrapperCard>
    </div>
  );
}

export default ProductList;