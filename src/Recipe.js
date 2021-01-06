import React from 'react';


const Recipe = ({image, title, cuisines,  mealLabels, dish, healthLabels, calories, totalTime, dietLabels}) => {
return(
<div>
<img src={image} alt=""/>
<h1>{title}</h1>
<p>{cuisines}</p>
<p>{mealLabels}</p>
<p>{dish}</p>
<p>{healthLabels}</p>
<p>{calories}</p>
<p>{totalTime}</p>
<p>{dietLabels}</p>
</div>

);
};
export default Recipe;