import { ApiContext } from "../../../../context/ApiContext";
import styles from "./Recipe.module.scss";
import {useContext} from "react";

function Recipe({recipe:{ _id ,title, image,liked},toggleLikedRecipe} ) {

   const BASE_URL_API = useContext(ApiContext)
   async function handleClick(){
    try{
      const response = await fetch(`${BASE_URL_API}/${_id} `,{
         method: 'PATCH',
         headers: {
          'Content-Type': 'application.json'
         },
         body: JSON.stringify(
          {liked: !liked}
         )
      });
      if(response.ok){
        const updatedRecipe = await response.json();
        toggleLikedRecipe(updatedRecipe)
      }
   
    }catch(e){
      console.log("ERROR")

    }
     
  }
  return (
    <div  onClick={handleClick} className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={image} alt="recipe" />
      </div>
      <div className={`${styles.recipeTitle} d-flex flex-column align-items-center justify-content-center`}>
        <h3 className="mb-10">
          {title}
      
          <i className={`fa-solid fa-heart ${liked ? "text-primary":" "}`}></i>
          </h3>
      
      </div>
    </div>
  )
}

export default Recipe;
