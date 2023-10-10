import { cleanEnv, str } from 'envalid'

export const env = cleanEnv(process.env, {
  PEXELS_API_KEY: str(),
  PEXELS_API_URL: str(),
  JSON_PLACEHOLDER_API: str(),
})
