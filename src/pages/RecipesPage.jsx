import { Heading, Box } from '@chakra-ui/react';
import { useState } from 'react';

import { RecipeItem } from '../components/RecipeItem';
import { SelectRecipe } from '../components/SelectRecipe';
import { data } from '../utils/data';

let recipes = data.hits;

console.log(recipes);

export const RecipesPage = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(recipes);

  return (
    <Box h='auto' w='100%' bg='orange.300'>
      <Heading textAlign='center' mb='20px'>
        Winc Recipe App
      </Heading>
      {selectedRecipe ? (
        <RecipeItem recipes={selectedRecipe} onClick={setSelectedRecipe} />
      ) : (
        <SelectRecipe recipes={setSelectedRecipe} onClick={setSelectedRecipe} />
      )}
    </Box>
  );
};
