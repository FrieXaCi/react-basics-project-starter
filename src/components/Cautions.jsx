import { Text } from '@chakra-ui/react';

export const Cautions = ({ recipe }) => {
  return (
    <Text fontSize='sm' color='black' key={recipe.label}>
      {recipe.recipe.cautions}
    </Text>
  );
};
