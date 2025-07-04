import { Injectable } from '@nestjs/common';
import { hashSync, compareSync } from 'bcryptjs';
import * as dateFns from 'date-fns';

@Injectable()
export class UserService {
  hashPassword(password: string): string {
    return hashSync(password, 10);
  }

  comparePassword(password: string, hash: string): boolean {
    return compareSync(password, hash);
  }

  generateAlphaNumericCode(length: number = 6): string {
    const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < length; i++) {
      code += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return code;
  }

  generateDateLifetime(
    qty: number,
    unit: 'days' | 'weeks' | 'months' | 'years' | 'seg' | 'min',
  ): Date {
    switch (unit) {
      case 'days':
        return dateFns.addDays(new Date(), qty);
      case 'weeks':
        return dateFns.addWeeks(new Date(), qty);
      case 'months':
        return dateFns.addMonths(new Date(), qty);
      case 'years':
        return dateFns.addYears(new Date(), qty);
      case 'seg':
        return dateFns.addSeconds(new Date(), qty);
      case 'min':
        return dateFns.addMinutes(new Date(), qty);
      default:
        return dateFns.addDays(new Date(), qty);
    }
  }

  isDateExpired(date: Date): boolean {
    return dateFns.isBefore(date, new Date());
  }
}
