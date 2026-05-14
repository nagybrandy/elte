import { ProductCard } from '../components/ProductCard'
import { useAppSelector } from '../stores/hooks'
// TODO (Lesson 2, task 1): replace the line below with useGetProductsQuery from productsApiSlice
// import { useGetProductsQuery } from '../stores/productsApiSlice'

export function ProductListPage() {
  // Lesson 1: read products from local Redux store
  const products = useAppSelector((state) => state.products.items)

  // TODO (Lesson 2, task 1): switch to RTK Query
  // const { data, isLoading, isError } = useGetProductsQuery()
  // if (isLoading) return <span className="loading loading-spinner loading-lg" />
  // if (isError) return <div className="alert alert-error">API is not available.</div>
  // const products = data?.items ?? []

  return (
    <div className="space-y-4">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>Products</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  )
}
