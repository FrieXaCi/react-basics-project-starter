import { Text } from '@chakra-ui/react';

export const DietLabel = ({ recipe }) => {
  return (
    <Text fontSize='sm' color='black'>
      {recipe.recipe.dietLabels}
    </Text>
  );
};
