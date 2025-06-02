// import Ingredient from "./Ingredient";
import {useState} from "react";
// Continue from 6:14:00
function Main(){
    
    const [ingredients,setIngredients] = useState([
       
    ])
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ) )

        // return<Ingredient ingredient={item}/>
   
    function handleSubmit(event){
        //prevents refreshing the page
        event.preventDefault();
        //grabbing form data
        const formData = new FormData(event.currentTarget)
        //grabbing a particular field from the form data

        const newIngredient = formData .get("ingredient")
        setIngredients(prevIngredients=>[...prevIngredients,newIngredient])
        //console.log(newIngredient)
        
        //console.log(ingredients)
        //console.log("Form submitted!");
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


    return(
    <main>
    <form onSubmit={handleSubmit} className="add-ingredients">
        <input 
        type="text"
        name="ingredient"
        placeholder="e.g. oregano"
        aria-label="Add ingredient"/>
        <button >Add ingredient</button>
    </form>
    <ul>
        {ingredientsListItems}
    </ul>

    {/* <div className="counter">
        <button className="minus" onClick={subtract}>-</button>
        <h2 className="count">{count}</h2>
        <button className="plus" onClick={add}>+</button>

    </div> */}
    
    </main>)
}

export default Main;