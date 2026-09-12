import { use, useState } from 'react'
import type { Types } from '../types/types'
import Product from './Product'

type ProductsProps = {
  ProductIconsData: Promise<Types[]>
}

const Products = ({ ProductIconsData }: ProductsProps) => {
  const products = use(ProductIconsData)

  const [selectedProducts, setSelectedProducts] = useState<Types[]>([])

  // Add product to stack
  const handleAddToStack = (product: Types) => {
    const alreadySelected = selectedProducts.some(
      (item) => item.id === product.id
    )

    if (alreadySelected) {
      return
    }

    setSelectedProducts([...selectedProducts, product])
  }

  const handleRemove = (id: string) => {
    setSelectedProducts(
      selectedProducts.filter((item) => item.id !== id)
    )
  }

  const handleRemoveAll = () => {
    setSelectedProducts([])
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-8">

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              handleAddToStack={handleAddToStack}
              selectedProducts={selectedProducts}
            />
          ))}
        </div>

        {/* Your Stack */}
        <div>
          <div className="sticky top-6 w-full rounded-[24px] border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">

            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Your Stack
            </h3>

            <p className="text-sm text-slate-400 mb-5">
              {selectedProducts.length} Technology Selected
            </p>

            <div className="space-y-3 mb-5">

              {selectedProducts.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 border border-gray-100 rounded-xl bg-gray-50/50"
                >
                  <div className="flex items-center gap-3">

                    <div className="w-9 h-9 rounded-lg bg-orange-50 flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-6 h-6 object-contain"
                      />
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">
                        {item.name}
                      </h4>

                      <span className="text-xs text-slate-400">
                        {item.category}
                      </span>
                    </div>

                  </div>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-slate-400 hover:text-red-500 text-base px-2 py-1 cursor-pointer transition"
                  >
                    ✕
                  </button>
                </div>
              ))}

              {selectedProducts.length === 0 && (
                <p className="text-sm text-slate-400 text-center py-5">
                  No technology selected
                </p>
              )}

            </div>

            {selectedProducts.length > 0 && (
              <button
                onClick={handleRemoveAll}
                className="w-full border border-red-200 text-red-500 hover:bg-red-50 text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors cursor-pointer"
              >
                Remove All
              </button>
            )}

          </div>
        </div>

      </div>
    </div>
  )
}

export default Products