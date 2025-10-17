//   userId?: number;
export interface User {
  userId?: number;
  code: string;
  name: string;
  email: string;
  phoneNumber: string;
  password?: string;
  approveSeverity: number;
  bossId?: number | null;
}
