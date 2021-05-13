import React from 'react'
import "./Home.css"
import Product from './Product'
function Home () {
    return (
			<div className="home">
				<div className="home__container">
					<img
						className="home__image"
						src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
						alt=""
					/>
					<div className="home__row">
						<Product
							id="12321341"
							title="Everlasting Comfort Cool Mist Humidifier for Bedroom with Essential Oil Tray, 6L, Black"
							price={99.29}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/I/910iTpyL4GL._AC_SX679_.jpg"
						/>
						<Product
							id="2"
							title="Hercules Tuff Charging Station for Multiple Devices, with 6 USB Fast Ports and 6 Short Mixed USB Cables Included for Cell Phones, Smart Phones, Tablets, and Other Electronics, Silver"
							price={1399.95}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/I/81PeBrTfhnL._AC_SX679_.jpg"
						/>
					</div>
					<div className="home__row">
						<Product
							id="3"
							title="GRC Mini Projector, 1080P HD Supported Portable Movie Projector with 45000 Hrs LED Lamp Life, Compatible with TV Stick Video Game HDMI USB AV DVD for Multimedia Home Theater, Projector for outdoor"
							price={169.99}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/I/61opeoEsFQL._AC_SX466_.jpg"
						/>
						<Product
							id="4"
							title="Ibanez 4 String Bass Guitar, Right, Brown Sunburst (GSRM20BS)"
							price={179.99}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/I/716KDhgBb2L._AC_SL1500_.jpg"
						/>
						<Product
							id="5"
							title="Hamilton Beach Personal Blender for Shakes and Smoothies with 14 Oz Travel Cup and Lid, Black (51101AV)"
							price={139.99}
							rating={4}
							image="https://m.media-amazon.com/images/I/31vrwMn4YlL._AC_SR160,160_.jpg"
						/>
					</div>
					<div className="home__row">
						<Product
							id="6"
							title="Apple iMac ME088LL/A 27-Inch, 1TB Hard Drive - 8GB Ram (Renewed)"
							price={1429.99}
							rating={3}
							image="https://images-na.ssl-images-amazon.com/images/I/716exWTRMyL._AC_SX679_.jpg"
						/>
						<Product
							id="6"
							title="Hercules Tuff Charging Station for Multiple Devices, with 6 USB Fast Ports and 6 Short Mixed USB Cables Included for Cell Phones, Smart Phones, Tablets, and Other Electronics, Silver"
							price={39.99}
							rating={5}
							image="https://images-na.ssl-images-amazon.com/images/I/71DQewyfmWL._AC_SX679_.jpg"
						/>
					</div>
				</div>
			</div>
		);
}

export default Home
