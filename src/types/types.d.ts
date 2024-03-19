export interface UserInfo {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  birthdate: string;
  gender: string;
  isStudent: boolean;
}

export interface UpdatedUserInfo {
  profile?: {
    birthDate?: string;
    name?: string;
    contact?: string;
    address?: string;
    gender?: string;
  };
  email?: string;
  isActive?: boolean;
}

export interface UserListInfo {
  email: string;
  groups: string[];
  isActive: boolean;
  isAdmin: boolean;
  isSuperuser: boolean;
  lastLogin: string;
  modifiedData: string;
  profile: {
    address: string;
    birthDate: string;
    contact: string;
    gender: string;
    id: number;
    modifiedData: string;
    name: string;
    registerDate: string;
  };
  registerDate: string;
  type: "manager" | "student";
  userId: string;
}
