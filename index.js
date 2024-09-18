function loader (registryOrVersion) {
  const registry = typeof registryOrVersion === 'string' ? require('reinarpg-registry')(registryOrVersion) : registryOrVersion
  return {
    Recipe: require('./lib/recipe')(registry),
    RecipeItem: require('./lib/recipe_item')
  }
}

module.exports = loader
