import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';

import { MealRecipe } from '../pages/MealRecipe';
import { Preloader } from './Preloader';


function Recipe() {
    const { id } = useParams()
    const { goBack } = useHistory()
    const [recipe, setRecipe] = useState({})


    useEffect(() => {
        getMealById(id)
            .then((data) => setRecipe(data.meals[0]))
    }, [id])

    return (<>
        {!recipe.idMeal ? <Preloader /> : <MealRecipe recipe={recipe} goBack={goBack} />}
    </>)

}

export { Recipe }