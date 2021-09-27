import { Link } from "react-router-dom"

function MealRecipe(props) {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
        strInstructions
    } = props.recipe[0]
    return <div className='card'>
        <div className="card-image">
            <img src={strMealThumb} alt={strMeal} />
        </div>
        <div className="card-content">
            <span className="card-title">
                {strMeal}
            </span>
            <p>{strInstructions.slice(0, 500)}...</p>
        </div>
        <div className="card-action">
            <Link to={`/category/${strCategory}`} className='btn'>Watch category</Link>
        </div>
    </div>
}

export { MealRecipe }