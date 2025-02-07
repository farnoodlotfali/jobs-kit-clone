export interface IUser {
  avatarId: string;
  email: string;
  googleUserWithoutPassword: boolean;
  id: number;
  level: string;
  name: string;
  phone: string;
  phoneVerified: boolean;
  role: string;
  telegramUserId?: string;
  verified: boolean;
}
