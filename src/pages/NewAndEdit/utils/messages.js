export const errorMessages = {
    newIngredientEmpty: {
      user: 'É necessário dar um nome ao ingrediente.',
      dev: 'The newIngredient is empty.',
    },
  
    nameAlreadyRegistered: {
      user: 'Nome já utilizado!',
      dev: 'The name of newIngredient is already registered in database.',
    },
  
    anyPhotoAdded: {
      user: 'Nenhuma imagem foi adicionada!',
      dev: 'The image was not added!',
    },
  
    onRegisterIngredient: {
      dev: 'Ingredient was not registered successfully.',
    },
  
    onRegisterPhoto: {
      dev: 'Image was not registered successfully.',
    },
  
    genericInputEmpty: {
      user: `
      Algum dos campos está vazio:
        - Nome;
        - Categoria;
        - Ingredientes;
        - Preço;
        - Descrição.
      Verifique e tente novamente.`,
      dev: 'Any input is empty.',
    },
  
    anyIngredientAdd: {
      user: 'É necessário adicionar ao menos um ingrediente!',
      dev: 'Any  ingredient was added.',
    },
  
    priceInvalid: {
      user: 'Preço inválido!',
      dev: 'The price is not valid.',
    },
  
    newIngredientNotAdd: {
      user: 'Clique para adicionar um ingrediente.',
      dev: 'A new ingredient was typed, but not added.',
    },
  
    onRegisterMeal: {
      dev: 'Meal was not registered successfully.',
    },
  };