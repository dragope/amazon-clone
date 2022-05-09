import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Home" />
        </div>
        <div className="home__row">
            <Product 
                id='1'
                title='The lean startup' 
                price={19.99} 
                image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' 
                rating={4}     
            />
            <Product
                id='2'
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with k-beater, Dough, Hook and Whisk, 5 Litre Glass Bowl" 
                price={239.00} 
                image='https://www.reviewmood.com/images/Kenwood-kMix-Stand-Mixer-1000-800.jpg' 
                rating={3}    
            />
        </div>
         <div className="home__row">
            <Product
                id='3'
                title='Samsung Galaxy Watch4 (Bluetooth) 1.2"' 
                price={199.99} 
                image='https://images.samsung.com/is/image/samsung/p6pim/ar/2108/gallery/ar-galaxy-watch4-398880-sm-r870nzkaaro-481111435?$720_576_PNG$' 
                rating={4}      
            />
            <Product
                id='4'
                title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric' 
                price={98.99} 
                image='https://m.media-amazon.com/images/I/61MnypbfsfL._AC_SX425_.jpg' 
                rating={5}    
            />
            <Product
                id='5'
                title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)' 
                price={598.99} 
                image='https://www.srvfast.com/media/catalog/product/cache/73f179befb2b664ec3794b7759101d79/4/1/41foygrhrtl_milu30yvetmvlxtd.jpg' 
                rating={4}    
            />
        </div>
        <div className="home__row">
            <Product
                id='6'
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" 
                price={1099.99} 
                image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg' 
                rating={3}   
            />

        </div>
    </div>
  )
}

export default Home