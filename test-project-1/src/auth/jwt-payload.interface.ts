// src/auth/jwt-payload.interface.ts

export interface JwtPayload {
    username: string;
    sub: number; // or another type matching your user ID type
  }
  