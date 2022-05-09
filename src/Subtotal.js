import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import { useNavigate } from 'react-router-dom'
import './Subtotal.css'

function Subtotal() {

    const navigate = useNavigate();
    const [ { basket }, dispatch ] = useStateValue();
    const finalPrice = basket.reduce((acc, obj) => acc + obj.price, 0);

  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value)=>(
                <>
                    <p>
                        Subtotal ({basket?.length} items): $
                            <strong>
                                {finalPrice > 0 ? finalPrice : 0}
                            </strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>

            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix={'$'}
        />
        <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal