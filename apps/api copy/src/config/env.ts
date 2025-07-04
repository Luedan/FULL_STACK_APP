/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* istanbul ignore file */
import 'dotenv/config';
import * as joi from 'joi';

/**
 * The environment variables type.
 */
type EnvType = {
  PORT: number;
  DATABASE_URL: string;
  ENVIRONMENT?: string;
  JWT_SECRET: string;
  JWT_ACCESS_TOKEN_EXPIRES_IN: string;
  JWT_REFRESH_TOKEN_EXPIRES_IN: string;
};

/**
 * The environment variables schema.
 */
const envSchema = joi
  .object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
    ENVIRONMENT: joi.string().optional(),
    JWT_SECRET: joi.string().required(),
    JWT_ACCESS_TOKEN_EXPIRES_IN: joi.string().required(),
    JWT_REFRESH_TOKEN_EXPIRES_IN: joi.string().required(),
  })
  .unknown(true);

/**
 * The environment variables validation result.
 */
const { error, value } = envSchema.validate(process.env);

/**
 * Throws an error if the environment variables are invalid.
 */
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

/**
 * The environment variables.
 */
const envsVars: EnvType = value;

/**
 * The environment variables exports.
 */
export const envs = {
  PORT: envsVars.PORT,
  DATABASE_URL: envsVars.DATABASE_URL,
  ENVIRONMENT: envsVars.ENVIRONMENT,
  JWT_SECRET: envsVars.JWT_SECRET,
  JWT_ACCESS_TOKEN_EXPIRES_IN: envsVars.JWT_ACCESS_TOKEN_EXPIRES_IN,
  JWT_REFRESH_TOKEN_EXPIRES_IN: envsVars.JWT_REFRESH_TOKEN_EXPIRES_IN,
};
