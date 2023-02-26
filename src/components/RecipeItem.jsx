import { Flex } from '@chakra-ui/react';

import { Cautions } from './RecipeData/Cautions';
import { DietLabel } from './RecipeData/DietLabel';
import { DishType } from './RecipeData/DishType';
import { MealType } from './RecipeData/MealType';
import { RecipeImages } from './RecipeData/RecipeImages';
import { RecipeTitle } from './RecipeData/RecipeTitle';

export const RecipeItem = ({ recipes }) => {
  return (
    <Flex
      p='20'
      w='98%'
      direction='row'
      wrap='wrap'
      gap='20px'
      alignItems='center'
      justifyContent='center'
    >
      {recipes.map((recipe) => (
        <Flex
          as='button'
          h='380px'
          w='280px'
          alignItems='center'
          justifyContent='start'
          direction='column'
          gap='5px'
          boxShadow='dark-lg'
          borderRadius='25px'
          bg='yellow.300'
          key={recipe.recipe.label}
          onClick={() => {
            console.log(recipe.recipe.label);
          }}
        >
          <RecipeImages recipe={recipe} />
          <RecipeTitle recipe={recipe} />
          <MealType recipe={recipe} />
          <DishType recipe={recipe} />
          <DietLabel recipe={recipe} />
          <Cautions recipe={recipe} />
        </Flex>
      ))}
    </Flex>
  );
};
