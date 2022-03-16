/* eslint-disable prefer-promise-reject-errors */
import 'dotenv/config';
import { compare, genSalt, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';

const saltRounds = Number(process.env.SALT_ROUNDS) || 8;
const tokenSecret = process.env.TOKEN_SECRET || 'secret';

export function hashPassword(
  password: string
): Promise<[Error | null, string | null]> {
  return new Promise((resolve, reject) => {
    genSalt(saltRounds, (err, salt) => {
      if (err) {
        reject([err, null]);
      }
      hash(password, salt, (hashErr, hashedPassword) => {
        if (hashErr) {
          reject([hashErr, null]);
        }
        resolve([null, hashedPassword]);
      });
    });
  });
}

export function comparePassword({
  password,
  hashedPassword,
}: {
  password: string;
  hashedPassword: string;
}): Promise<[Error | null, boolean]> {
  return new Promise((resolve, reject) => {
    compare(password, hashedPassword, (err, result) => {
      if (err) {
        reject([err, null]);
      }
      resolve([null, result]);
    });
  });
}

export function generateTokens({ userId }: { userId: number }): {
  accessToken: string;
  refreshToken: string;
} {
  const accessToken = sign({ userId }, tokenSecret, {
    expiresIn: '15m',
  });
  const refreshToken = sign({ userId }, tokenSecret, {
    expiresIn: '7d',
  });
  return {
    accessToken,
    refreshToken,
  };
}

