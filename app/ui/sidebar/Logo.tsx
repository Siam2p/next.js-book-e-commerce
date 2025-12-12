import { SparklesIcon } from '@heroicons/react/24/solid'

export default function Logo() {
  return (
    <div className='flex flex-row items-center text-white leading-none'>
      <SparklesIcon className="w-12 h-12 " />
      <p className='text-[28px] ml-1'>LitLoop</p>
    </div>
  )
}
