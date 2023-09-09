const getEnvVar = (varname: string) => {
  const value = process.env[varname];

  if (!value) {
    throw new Error(
      `Env variable ${varname} not found. Make sure you have set it.`
    );
  }

  return value;
};

export const PEXELS_API_KEY = getEnvVar("PEXELS_API_KEY");
export const PEXELS_API_URL = getEnvVar("PEXELS_API_URL");
