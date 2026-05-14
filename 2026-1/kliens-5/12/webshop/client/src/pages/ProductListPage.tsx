import { ProductCard } from '../components/ProductCard'
import { useGetAllProductsQuery } from '../stores/productsApiSlice'
// TODO (Lesson 2, task 1): replace the line below with useGetProductsQuery from productsApiSlice

export function ProductListPage() {
  // Lesson 1: read products from local Redux store

  const { data, isLoading, error } = useGetAllProductsQuery()
  if(error) {
    return <div>Nem sikerült lekérni a termékeket</div>
  }
  if(isLoading) {
    <div>Töltődik...</div>
  }

  const products = data ? data.items : undefined

  return (
    <div className="space-y-4">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>Products</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products && products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
