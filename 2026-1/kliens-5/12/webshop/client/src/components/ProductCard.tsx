import { Link } from 'react-router-dom'
import type { Product } from '../types'
import { useAppDispatch, useAppSelector } from '../stores/hooks'
import { add, dec } from '../stores/cartSlice'

export function ProductCard({
  product,
  showActions = true,
}: {
  product: Product
  showActions?: boolean
}) {
  const dispatch = useAppDispatch()
  const qty = useAppSelector(
    (state) => state.cart.items.find((i) => i.productId === product.id)?.qty ?? 0,
  )

  return (
    <div className="card bg-base-100 shadow">
      <figure className="aspect-[4/3] overflow-hidden bg-base-200">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p className="text-sm opacity-70">{product.description}</p>
        {showActions ? (
          <div className="mt-2 flex items-end justify-between">
            <div className="font-semibold leading-none">{product.priceHuf} HUF</div>
            <div className="flex items-end gap-2">
              <Link to={`/products/${product.id}`} className="btn btn-ghost btn-sm">
                Details
              </Link>
              {qty > 0 ? (
                <div className="flex items-center gap-1">
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => dispatch(dec(product.id))}
                  >
                    −
                  </button>
                  <span className="min-w-[1.5rem] text-center font-semibold">{qty}</span>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => dispatch(add(product.id))}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => dispatch(add(product.id))}
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="mt-2 flex items-end justify-between">
            <div className="font-semibold leading-none">{product.priceHuf} HUF</div>
            <div className="badge badge-ghost">Preview</div>
          </div>
        )}
      </div>
    </div>
  )
}
