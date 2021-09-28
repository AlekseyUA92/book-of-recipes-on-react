import { Link } from "react-router-dom"

function MealRecipe({ recipe, goBack }) {
    const {
        idMeal,
        strMeal,
        strCategory,
        strArea,
        strMealThumb,
        strInstructions,
        strYoutube
    } = recipe
    return (
        <div className='recipe'>
            <img src={strMealThumb} alt={strMeal} />
            <h1 className="card-title">{strMeal}</h1>
            <h6>Category: {strCategory}</h6>
            {strArea ? <h6>{strArea}</h6> : null}
            <p>{strInstructions}</p>

            <table className="centered">
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(recipe).map((key) => {
                        if (key.includes('Ingredient') && recipe[key]) {
                            return (
                                <tr key={key}>
                                    <td>{recipe[key]}</td>
                                    <td>{
                                        recipe[
                                        `strMeasure${key.slice(13)}`
                                        ]
                                    }</td>
                                </tr>
                            )
                        }
                        return null
                    })

                    }
                </tbody>
            </table>

            {strYoutube ?
                <div className="row">
                    <h5 className='video-title'>Video Recipe</h5>
                    <iframe title={idMeal} src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} allowFullScreen />

                </div>
                : null}
            <button onClick={goBack} className='btn'>Go Back</button>
        </div>
    )
}

export { MealRecipe }