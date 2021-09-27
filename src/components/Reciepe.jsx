import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMealById } from '../api';
import { MealRecipe } from '../pages/MealRecipe';
import { Preloader } from './Preloader';


function Reciepe() {
    const { id } = useParams()
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        getMealById(id)
            .then((data) => setRecipe(data.meals))
    }, [id])

    return (<>
        {!recipe.length ? <Preloader /> : <MealRecipe recipe={{ ...recipe }} />}
    </>)

}

export { Reciepe }