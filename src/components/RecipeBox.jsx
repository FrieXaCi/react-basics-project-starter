import { Flex } from '@chakra-ui/react';

import { Cautions } from './Cautions';
import { DietLabel } from './DietLabel';
import { DishType } from './DishType';
import { MealType } from './MealType';
import { RecipeImages } from './RecipeImages';
import { Title } from './Title';

export const RecipeBox = ({ recipes }) => {
  return (
    <Flex
      m='20'
      w='100vw'
      direction='row'
      wrap='wrap'
      gap='20px'
      alignItems='center'
      justifyContent='start'
    >
      {recipes.map((recipe) => (
        <Flex
          h='380px'
          w='280px'
          padding='20px'
          alignItems='center'
          justifyContent='start'
          direction='column'
          gap='5px'
          boxShadow='dark-lg'
          borderRadius='25px'
          bg='yellow.300'
          key={recipe.label}
        >
          <Title key={recipe.label} recipe={recipe} />
          <RecipeImages key={recipe.label} recipe={recipe} />
          <MealType key={recipe.label} recipe={recipe} />
          <DishType key={recipe.label} recipe={recipe} />
          <DietLabel key={recipe.label} recipe={recipe} />
          <Cautions key={recipe.label} recipe={recipe} />
        </Flex>
      ))}
    </Flex>
  );
};
