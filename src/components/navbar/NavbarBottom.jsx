import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
// import './style/navbarbottom.css'
import img1 from '../../assets/imgs/theme/logo.svg'
import img2 from '../../assets/imgs/theme/icons/category-1.svg'
import img3 from '../../assets/imgs/theme/icons/category-2.svg'
import img4 from '../../assets/imgs/theme/icons/category-3.svg'
import img5 from '../../assets/imgs/theme/icons/category-3.svg'
import img6 from '../../assets/imgs/theme/icons/category-5.svg'
import img7 from '../../assets/imgs/theme/icons/category-6.svg'
import img8 from '../../assets/imgs/theme/icons/category-7.svg'
import img9 from '../../assets/imgs/theme/icons/category-8.svg'
import img10 from '../../assets/imgs/theme/icons/category-9.svg'
import img11 from '../../assets/imgs/theme/icons/category-10.svg'
import img12 from '../../assets/imgs/theme/icons/icon-1.svg'
import img13 from '../../assets/imgs/theme/icons/icon-2.svg'
import img14 from '../../assets/imgs/theme/icons/icon-3.svg'
import img15 from '../../assets/imgs/theme/icons/icon-4.svg'
import img16 from '../../assets/imgs/banner/banner-menu.png'
import img17 from '../../assets/imgs/theme/icons/icon-headphone.svg'
import img18 from '../../assets/imgs/theme/icons/icon-heart.svg'
import img19 from '../../assets/imgs/theme/icons/icon-cart.svg'
import img20 from '../../assets/imgs/shop/thumbnail-3.jpg'
import img21 from '../../assets/imgs/shop/thumbnail-4.jpg'
import img22 from '../../assets/imgs/theme/icons/icon-hot.svg'
import { useEffect, useState } from 'react';


export const NavbarBottom = () => {
    const [scrolled, setScrolled] = useState(false);
    const [categoryDropdwon, setCategoryDropdwon] = useState(false);
    const [moreCategory, setmoreCategory] = useState(false);
	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 200) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);
    const handlerCategorydropDown=()=>{
        setCategoryDropdwon(!categoryDropdwon);
        console.log(categoryDropdwon);
    }
    const handlerMoreCategory=()=>{
        setmoreCategory(!moreCategory);
        console.log(moreCategory);
    }
  return (
    <>
    <div className={`header-bottom header-bottom-bg-color sticky-bar ${scrolled ? 'sticky-header' : ''}`}>
                <div className="container">
                    <div className="header-wrap header-space-between position-relative">
                        <div className="logo logo-width-1 d-block d-lg-none">
                            <Link to="index.html"><img src={img1} alt="logo"/></Link>
                        </div>
                        <div className="header-nav d-none d-lg-flex">
                            <div className="main-categori-wrap d-none d-lg-block">
                                <Link className="categories-button-active" to="#">
                                    <span className="fi-rs-apps"></span> <span className="et">Browse</span> All Categories
                                    <Icon icon="prime:angle-down" onClick={handlerCategorydropDown}/>
                                </Link>
                                <div className={`categories-dropdown-wrap categories-dropdown-active-large font-heading ${categoryDropdwon?'show':'hide'}`}>
                                    <div className="d-flex categori-dropdown-inner">
                                        <ul>
                                            <li>
                                                <Link to="shop-grid-right.html"> <img src={img2} alt=""/>Milks and Dairies</Link>
                                            </li>
                                            <li>
                                                <Link to="shop-grid-right.html"> <img src={img3} alt=""/>Clothing &amp; beauty</Link>
                                            </li>
                                            <li>
                                                <Link to="shop-grid-right.html"> <img src={img4} alt=""/>Pet Foods &amp; Toy</Link>
                                            </li>
                                            <li>
                                                <Link to="shop-grid-right.html"> <img src={img5} alt=""/>Baking material</Link>
                                            </li>
                                            <li>
                                                <Link to="shop-grid-right.html"> <img src={img6} alt=""/>Fresh Fruit</Link>
                                            </li>
                                        </ul>
                                        <ul className="end">
                                            <li>
                                                <Link to="shop-grid-right.html"> <img src={img7} alt=""/>Wines &amp; Drinks</Link>
                                            </li>
                                            <li>
                                                <Link to="shop-grid-right.html"> <img src={img8} alt=""/>Fresh Seafood</Link>
                                            </li>
                                            <li>
                                                <Link to="shop-grid-right.html"> <img src={img9} alt=""/>Fast food</Link>
                                            </li>
                                            <li>
                                                <Link to="shop-grid-right.html"> <img src={img10} alt=""/>Vegetables</Link>
                                            </li>
                                            <li>
                                                <Link to="shop-grid-right.html"> <img src={img11} alt=""/>Bread and Juice</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={`more_slide_open${categoryDropdwon}`} style={{display: 'none'}}>
                                        <div className="d-flex categori-dropdown-inner">
                                            <ul>
                                                <li>
                                                    <Link to="shop-grid-right.html"> <img src={img12} alt=""/>Milks and Dairies</Link>
                                                </li>
                                                <li>
                                                    <Link to="shop-grid-right.html"> <img src={img13} alt=""/>Clothing &amp; beauty</Link>
                                                </li>
                                            </ul>
                                            <ul className="end">
                                                <li>
                                                    <Link to="shop-grid-right.html"> <img src={img14} alt=""/>Wines &amp; Drinks</Link>
                                                </li>
                                                <li>
                                                    <Link to="shop-grid-right.html"> <img src={img15} alt=""/>Fresh Seafood</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='more_categories'><span className="icon"onClick={handlerMoreCategory}></span> <span className="heading-sm-1">Show more...</span></div>
                                </div>
                            </div>
                            <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                                <nav>
                                    <ul>
                                        <li className="hot-deals"><img src={img22} alt="hot deals"/><Link to="shop-grid-right.html">Hot Deals</Link></li>
                                        <li>
                                            <Link  className="active" to="index.html">Home <Icon icon="prime:angle-down"  /></Link>
                                            <ul className="sub-menu">
                                                <li><Link to="index.html">Home 1</Link></li>
                                                <li><Link to="index-2.html">Home 2</Link></li>
                                                <li><Link to="index-3.html">Home 3</Link></li>
                                                <li><Link to="index-4.html">Home 4</Link></li>
                                                <li><Link to="index-5.html">Home 5</Link></li>
                                                <li><Link to="index-6.html">Home 6</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="page-about.html">About</Link>
                                        </li>
                                        <li>
                                            <Link to="shop-grid-right.html">Shop <Icon icon="prime:angle-down" rotate={3} /></Link>
                                            <ul className="sub-menu">
                                                <li><Link to="shop-grid-right.html">Shop Grid – Right Sidebar</Link></li>
                                                <li><Link to="shop-grid-left.html">Shop Grid – Left Sidebar</Link></li>
                                                <li><Link to="shop-list-right.html">Shop List – Right Sidebar</Link></li>
                                                <li><Link to="shop-list-left.html">Shop List – Left Sidebar</Link></li>
                                                <li><Link to="shop-fullwidth.html">Shop - Wide</Link></li>
                                                <li>
                                                    <Link to="#">Single Product <Icon icon="prime:angle-right"  /></Link>
                                                    <ul className="level-menu">
                                                        <li><Link to="shop-product-right.html">Product – Right Sidebar</Link></li>
                                                        <li><Link to="shop-product-left.html">Product – Left Sidebar</Link></li>
                                                        <li><Link to="shop-product-full.html">Product – No sidebar</Link></li>
                                                        <li><Link to="shop-product-vendor.html">Product – Vendor Info</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="shop-filter.html">Shop – Filter</Link></li>
                                                <li><Link to="shop-wishlist.html">Shop – Wishlist</Link></li>
                                                <li><Link to="shop-cart.html">Shop – Cart</Link></li>
                                                <li><Link to="shop-checkout.html">Shop – Checkout</Link></li>
                                                <li><Link to="shop-compare.html">Shop – Compare</Link></li>
                                                <li>
                                                    <Link to="#">Shop Invoice<Icon icon="prime:angle-right" rotate={3} /></Link>
                                                    <ul className="level-menu">
                                                        <li><Link to="shop-invoice-1.html">Shop Invoice 1</Link></li>
                                                        <li><Link to="shop-invoice-2.html">Shop Invoice 2</Link></li>
                                                        <li><Link to="shop-invoice-3.html">Shop Invoice 3</Link></li>
                                                        <li><Link to="shop-invoice-4.html">Shop Invoice 4</Link></li>
                                                        <li><Link to="shop-invoice-5.html">Shop Invoice 5</Link></li>
                                                        <li><Link to="shop-invoice-6.html">Shop Invoice 6</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="#">Vendors <Icon icon="prime:angle-down"  /></Link>
                                            <ul className="sub-menu">
                                                <li><Link to="vendors-grid.html">Vendors Grid</Link></li>
                                                <li><Link to="vendors-list.html">Vendors List</Link></li>
                                                <li><Link to="vendor-details-1.html">Vendor Details 01</Link></li>
                                                <li><Link to="vendor-details-2.html">Vendor Details 02</Link></li>
                                                <li><Link to="vendor-dashboard.html">Vendor Dashboard</Link></li>
                                                <li><Link to="vendor-guide.html">Vendor Guide</Link></li>
                                            </ul>
                                        </li>
                                        <li className="position-static">
                                            <Link to="#">Mega menu <Icon icon="prime:angle-down"  /></Link>
                                            <ul className="mega-menu">
                                                <li className="sub-mega-menu sub-mega-menu-width-22">
                                                    <Link  className="menu-title" to="#">Fruit &amp; Vegetables</Link>
                                                    <ul>
                                                        <li><Link to="shop-product-right.html">Meat &amp; Poultry</Link></li>
                                                        <li><Link to="shop-product-right.html">Fresh Vegetables</Link></li>
                                                        <li><Link to="shop-product-right.html">Herbs &amp; Seasonings</Link></li>
                                                        <li><Link to="shop-product-right.html">Cuts &amp; Sprouts</Link></li>
                                                        <li><Link to="shop-product-right.html">Exotic Fruits &amp; Veggies</Link></li>
                                                        <li><Link to="shop-product-right.html">Packaged Produce</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="sub-mega-menu sub-mega-menu-width-22">
                                                    <Link className="menu-title" to="#">Breakfast &amp; Dairy</Link>
                                                    <ul>
                                                        <li><Link to="shop-product-right.html">Milk &amp; Flavoured Milk</Link></li>
                                                        <li><Link to="shop-product-right.html">Butter and Margarine</Link></li>
                                                        <li><Link to="shop-product-right.html">Eggs Substitutes</Link></li>
                                                        <li><Link to="shop-product-right.html">Marmalades</Link></li>
                                                        <li><Link to="shop-product-right.html">Sour Cream</Link></li>
                                                        <li><Link to="shop-product-right.html">Cheese</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="sub-mega-menu sub-mega-menu-width-22">
                                                    <Link className="menu-title" to="#">Meat &amp; Seafood</Link>
                                                    <ul>
                                                        <li><Link to="shop-product-right.html">Breakfast Sausage</Link></li>
                                                        <li><Link to="shop-product-right.html">Dinner Sausage</Link></li>
                                                        <li><Link to="shop-product-right.html">Chicken</Link></li>
                                                        <li><Link to="shop-product-right.html">Sliced Deli Meat</Link></li>
                                                        <li><Link to="shop-product-right.html">Wild Caught Fillets</Link></li>
                                                        <li><Link to="shop-product-right.html">Crab and Shellfish</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="sub-mega-menu sub-mega-menu-width-34">
                                                    <div className="menu-banner-wrap">
                                                        <Link to="shop-product-right.html"><img src={img16} alt="Nest"/></Link>
                                                        <div className="menu-banner-content">
                                                            <h4>Hot deals</h4>
                                                            <h3>
                                                                Dont miss<br></br>
                                                                Trending
                                                            </h3>
                                                            <div className="menu-banner-price">
                                                                <span className="new-price text-success">Save to 50%</span>
                                                            </div>
                                                            <div className="menu-banner-btn">
                                                                <Link to="shop-product-right.html">Shop now</Link>
                                                            </div>
                                                        </div>
                                                        <div className="menu-banner-discount">
                                                            <h3>
                                                                <span>25%</span>
                                                                off
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="blog-category-grid.html">Blog <Icon icon="prime:angle-down"  /></Link>
                                            <ul className="sub-menu">
                                                <li><Link to="blog-category-grid.html">Blog Category Grid</Link></li>
                                                <li><Link to="blog-category-list.html">Blog Category List</Link></li>
                                                <li><Link to="blog-category-big.html">Blog Category Big</Link></li>
                                                <li><Link to="blog-category-fullwidth.html">Blog Category Wide</Link></li>
                                                <li>
                                                    <Link to="#">Single Post <Icon icon="prime:angle-right" rotate={3} /></Link>
                                                    <ul className="level-menu level-menu-modify">
                                                        <li><Link to="blog-post-left.html">Left Sidebar</Link></li>
                                                        <li><Link to="blog-post-right.html">Right Sidebar</Link></li>
                                                        <li><Link to="blog-post-fullwidth.html">No Sidebar</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="#">Pages <Icon icon="prime:angle-down"  /></Link>
                                            <ul className="sub-menu">
                                                <li><Link to="page-about.html">About Us</Link></li>
                                                <li><Link to="page-contact.html">Contact</Link></li>
                                                <li><Link to="page-account.html">My Account</Link></li>
                                                <li><Link to="page-login.html">Login</Link></li>
                                                <li><Link to="page-register.html">Register</Link></li>
                                                <li><Link to="page-purchase-guide.html">Purchase Guide</Link></li>
                                                <li><Link to="page-privacy-policy.html">Privacy Policy</Link></li>
                                                <li><Link to="page-terms.html">Terms of Service</Link></li>
                                                <li><Link to="page-404.html">404 Page</Link></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="page-contact.html">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="hotline d-none d-lg-flex">
                            <img src={img17} alt="hotline"/>
                            <p>1900 - 888<span>24/7 Support Center</span></p>
                        </div>
                        <div className="header-action-icon-2 d-block d-lg-none">
                            <div className="burger-icon burger-icon-white">
                                <span className="burger-icon-top"></span>
                                <span className="burger-icon-mid"></span>
                                <span className="burger-icon-bottom"></span>
                            </div>
                        </div>
                        <div className="header-action-right d-block d-lg-none">
                            <div className="header-action-2">
                                <div className="header-action-icon-2">
                                    <Link to="shop-wishlist.html">
                                        <img alt="Nest" src={img18}/>
                                        <span className="pro-count white">4</span>
                                    </Link>
                                </div>
                                <div className="header-action-icon-2">
                                    <Link className="mini-cart-icon" to="#">
                                        <img alt="Nest" src={img19}/>
                                        <span className="pro-count white">2</span>
                                    </Link>
                                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                        <ul>
                                            <li>
                                                <div className="shopping-cart-img">
                                                    <Link to="shop-product-right.html"><img alt="Nest" src={img20}/></Link>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><Link to="shop-product-right.html">Plain Striola Shirts</Link></h4>
                                                    <h3><span>1 × </span>$800.00</h3>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <Link to="#"><Icon icon="gridicons:cross-small" rotate={3} /></Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="shopping-cart-img">
                                                    <Link to="shop-product-right.html"><img alt="Nest" src={img21}/></Link>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><Link to="shop-product-right.html">Macbook Pro 2022</Link></h4>
                                                    <h3><span>1 × </span>$3500.00</h3>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <Link to="#"><Icon icon="gridicons:cross-small" rotate={3} /></Link>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="shopping-cart-footer">
                                            <div className="shopping-cart-total">
                                                <h4>Total <span>$383.00</span></h4>
                                            </div>
                                            <div className="shopping-cart-button">
                                                <Link to="shop-cart.html">View cart</Link>
                                                <Link to="shop-checkout.html">Checkout</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
