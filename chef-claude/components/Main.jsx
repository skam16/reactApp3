// import Ingredient from "./Ingredient";
import {useState} from "react";
// Continue from 8:02
function Main(){
    
    const [ingredients,setIngredients] = useState([
       
    ])

    const [recipe,setRecipe] =  useState(false)

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ) )

        // return<Ingredient ingredient={item}/>
   //using handleSubmit
        // function handleSubmit(event){
        //     //prevents refreshing the page
        //     event.preventDefault();
        //     //grabbing form data
        //     const formData = new FormData(event.currentTarget)
        //     //grabbing a particular field from the form data

        //     const newIngredient = formData .get("ingredient")
        //     setIngredients(prevIngredients=>[...prevIngredients,newIngredient])
        //     //console.log(newIngredient)
            
        //     //console.log(ingredients)
        //     //console.log("Form submitted!");
        // }


function addIngredient(formData){
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
}

    //{ *****counter practice*****
    // const [count, setCount] = useState(0);

    // // function add(){
    // //     setCount(count+1)
    // // }
    // function add(){
    //     setCount(prevCount=>prevCount+1)
    // }
    // // if you ever need to use the previous state value, use the function form of setState
    // //especially if the new state depends on the previous state and then determine the new value based on that

    //   function subtract(){
    //     setCount(prevCount=>prevCount-1)
    // }
    //******Counter Practice Ends*****/}

    function getRecipe(){
        setRecipe(prevState = !prevState)
    }

    return(
    <main>
    <form action={addIngredient} className="add-ingredients">
        <input 
        type="text"
        name="ingredient"
        placeholder="e.g. oregano"
        aria-label="Add ingredient"/>
        <button >Add ingredient</button>
    </form>


   {ingredients.length>0 ? <section>
        <h2>Ingredients on hand:</h2>
        <ul className ="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
        {ingredients.length>3?<div className="get-recipe-container">
                <div>
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={getRecipe}>Get a recipe</button>

        </div>:"Add more ingredients to get a recipe!"}
   </section>:""}
   {recipe? <section className="recipeData">
    <p>Some data from API</p>
   </section>:""
}
    {/* <div className="counter">
        <button className="minus" onClick={subtract}>-</button>
        <h2 className="count">{count}</h2>
        <button className="plus" onClick={add}>+</button>

    </div> */}
    
    </main>)
}
export default Main;