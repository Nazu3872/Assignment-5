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
        <div className="flex h-full w-full flex-col rounded-[28px] border border-gray-100 bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">

            {/* Image + Badge */}
            <div className="flex min-h-[64px] items-start justify-between">
                <div className="flex h-16 w-16 items-center justify-center">
                    <img
                        src={product.icon}
                        alt={product.name}
                        className="h-14 w-14 object-contain"
                    />
                </div>

                <span className="rounded-full border border-blue-100 bg-blue-50 px-5 py-2 text-sm text-sky-500">
                    {product.badge}
                </span>
            </div>

            {/* Name + Description */}
            <div className="mt-5">
                <h2 className="text-3xl font-bold text-slate-900">
                    {product.name}
                </h2>

                <p className="mt-4 min-h-[84px] leading-7 text-slate-400">
                    {product.description}
                </p>
            </div>

            <div className="my-6 h-px bg-gray-100"></div>

            {/* Category + Difficulty + Rating */}
            <div className="flex min-h-[48px] items-center justify-between gap-2">

                <span className="px-2 py-2 text-slate-500">
                    {product.category}
                </span>

                <span className="text-base text-slate-500">
                    {product.difficulty}
                </span>

                <div className="flex items-center gap-2 text-base text-slate-600">
                    <FaStar className="shrink-0 text-yellow-400" />
                    <span>{product.rating}</span>
                </div>

            </div>

            {/* Button */}
            <button
                onClick={() => handleAddToStack(product)}
                disabled={isSelected}
                className={`mt-5 w-full rounded-xl py-3 text-sm font-semibold transition duration-200 ${isSelected
                        ? 'cursor-not-allowed bg-gray-100 text-gray-400'
                        : 'cursor-pointer bg-sky-500 text-white shadow-md shadow-sky-100 hover:bg-sky-600 hover:shadow-lg'
                    }`}
            >
                {isSelected ? 'Added to Stack' : 'Add to Stack'}
            </button>

        </div>
    )
}

export default Product