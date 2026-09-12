import { FaStar } from 'react-icons/fa'
import type { Types } from '../types/types'

interface Props {
  product: Types
  handleAddToStack: (product: Types) => void
  selectedProducts: Types[]
}

const Product = ({
  product,
  handleAddToStack,
  selectedProducts,
}: Props) => {
  const isSelected = selectedProducts.some(
    (item) => item.id === product.id
  )

  return (
    <div className="w-full rounded-[28px] border border-gray-100 bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">

      {/* Image + Badge */}
      <div className="flex items-start justify-between">
        <img
          src={product.icon}
          alt={product.name}
          className="w-14 h-14 object-contain"
        />

        <span className="rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sky-500">
          {product.badge}
        </span>
      </div>

      {/* Name + Description */}
      <div className="mt-5">
        <h2 className="text-3xl font-bold text-slate-900">
          {product.name}
        </h2>

        <p className="mt-4 leading-7 text-slate-400">
          {product.description}
        </p>
      </div>

      <div className="my-6 h-px bg-gray-100"></div>

      {/* Category + Difficulty + Rating */}
      <div className="flex items-center justify-between">

        <span className="rounded-md px-4 py-2 text-slate-500">
          {product.category}
        </span>

        <span className="text-base text-slate-500">
          {product.difficulty}
        </span>

        <div className="flex items-center gap-2 text-base text-slate-600">
          <FaStar className="text-yellow-400" />
          <span>{product.rating}</span>
        </div>

      </div>

      {/* Button */}
      <button
        onClick={() => handleAddToStack(product)}
        disabled={isSelected}
        className="w-full btn btn-primary text-white text-sm font-semibold py-2.5 px-4 rounded-xl cursor-pointer my-5 disabled:cursor-not-allowed"
      >
        {isSelected ? 'Added to Stack' : 'Add to Stack'}
      </button>

    </div>
  )
}

export default Product