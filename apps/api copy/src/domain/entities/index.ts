import { User } from './user.entity';

export const ENTITIES = [User];

const VALIDATION_CODE_LIFETIME_IN_MINUTES = 5;

export { User, VALIDATION_CODE_LIFETIME_IN_MINUTES };
