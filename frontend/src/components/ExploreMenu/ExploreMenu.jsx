import './ExploreMenu.css'
import { menu_list } from "../../assets/assets"
/* eslint-disable react/prop-types */

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Every dish on our menu is a story, crafted with passion and the finest ingredients. From comforting classics to bold, adventurous flavors, we’ve got something to satisfy every craving. Sit back, savor the moment, and enjoy food made with love and care.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => (
                    <div onClick={() => setCategory((prev) => prev === item.menu_name ? 'All' : item.menu_name)} key={`menu_${index}`} className='explore-menu-list-item'>
                        <img className={category === item.menu_name?'active':''} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu