import { ProductCard } from '../components/ProductCard'
import { useAppSelector } from '../stores/hooks';
import { useGetAllProductsQuery } from '../stores/productsApiSlice';

export function ProductListPage() {
  const {data, isLoading, error} = useGetAllProductsQuery();

  const cart = useAppSelector(state => state.cart)

  if(isLoading) {
    return "Töltődés..."
  }
  if(error) {
    return ("Az api nem elérhető!")
  }
  return (
    <div className="space-y-4">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>Products</li>
        </ul>
      </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data && data.items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
    </div>
  )
}

