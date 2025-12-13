import OrderDetails from '@/app/ui/Cart/OrderDetails'
import Payment from '@/app/ui/Cart/Payment'

export default function CartPage() {
  return (
    <div className="p-2 flex flex-col w-full">
      <h2 className="text-3xl">Welcome Ms. P</h2>
      <p className="text-xl text-zinc-600 pt-2">Thanks a lot for your purchase. Please complete the checkout process by paying for your order.</p>
      <div className="flex flex-wrap xs:flex-col sm:flex-col md:flex-col lg:flex-row justify-center items-center pt-10">
        <OrderDetails/>
        <Payment/>
      </div>
    </div>
  )
}
