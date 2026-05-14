import { useAppDispatch, useAppSelector } from '../stores/hooks'
import { clear, remove } from '../stores/cartSlice'

export function CartPage() {
  const dispatch = useAppDispatch()
  const items = useAppSelector((state) => state.cart.items)
  const products = useAppSelector((state) => state.products.items)

  const total = items.reduce((sum, item) => {
    const product = products.find((p) => p.id === item.productId)
    return sum + (product?.priceHuf ?? 0) * item.qty
  }, 0)

  return (
    <div className="space-y-4">
      <div className="rounded-box bg-base-100 p-6 shadow">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-2xl font-bold">Cart</h1>
          <button className="btn btn-ghost btn-sm" onClick={() => dispatch(clear())}>
            Clear all
          </button>
        </div>
      </div>

      <div className="rounded-box bg-base-100 p-6 shadow space-y-3">
        {items.length === 0 ? (
          <p className="opacity-70">Your cart is empty.</p>
        ) : (
          <>
            {items.map((item) => {
              const product = products.find((p) => p.id === item.productId)
              if (!product) return null
              return (
                <div key={item.productId} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="h-12 w-12 rounded object-cover"
                    />
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm opacity-60">
                        {item.qty} × {product.priceHuf} HUF
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold">{item.qty * product.priceHuf} HUF</span>
                    <button
                      className="btn btn-ghost btn-xs"
                      onClick={() => dispatch(remove(item.productId))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )
            })}
            <div className="divider" />
            <div className="flex justify-end text-lg font-bold">Total: {total} HUF</div>
          </>
        )}
      </div>
    </div>
  )
}
