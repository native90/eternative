let userColors = {};

try {
  const configPath = "../../../../eternative.config";
  const config = __DEV__ && require(configPath);
  if (config) {
    userColors = config.theme.colors || {};
  }
} catch (error) {
  console.warn(
    "eternative.config.js no encontrado o no es accesible. Usando configuración por defecto."
  );
  userColors = {};
}

export { userColors };
