import { NavLink } from "react-router-dom";
import capitalLeterHelper from "../helpers/capitalLeterHelper"

export default function ItemSale({ category, image }) {

    const divStyle = {
        backgroundImage: `url(${image})`
    };

    return (
        <NavLink to={`/category/${category}`} className="home__sale__item">
            <div style={divStyle} className="home__sale__item__background" ></div>
            <p>{capitalLeterHelper(category)}</p>
        </NavLink>
    )
}