export interface User {
  uid?: string;
  first_name?: string;
  last_name?: string;
  email_school?: string;
  dob?: string;
  grad_year?: string;
  nickname?: string;
  pledge_class?: string;
  email_personal?: string;
  phone?: string;
  headshot?: string;
  hometown_city?: string;
  hometown_state?: string;
  major?: string;
  minor?: string;
  street?: string;
  street2?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  role?: UserRole[];
  lastLogin?: string; //This will be deprecated  
  emailVerified?: boolean;
  linkedin_url?: string;
}

export interface UserRole {
    id?: string;
    name?: string;
    description?: string;
    created_date?: string;
    modded_date?: string;
}

export interface PledgeClass {
    id?: string;
    name?: string;
    description?: string;
    created_date?: string;
    modded_date?: string;
}

export interface LoginHistory {
    id?: string;
    platform?: string;
    browser?: string;
    ip_address?: string;
    created_date?: string;
    type?: string;
    userId?: string;
}

export interface ExecutiveRole {
    id?: string;
    name?: string;
    description?: string;
}

export interface Committee {
    id?: string;
    name?: string;
    description?: string;
}

export interface Role {
    value: string;
  }

export interface IUserApi {
    uid?: string;
    first_name?: string;
    last_name?: string;
    displayName?: string;
    emailVerified?: boolean;
    dob?: Date;
    nickname?: string;
    grad_year?: number;
    pledge_class?: PledgeClass;
    email_school?: string;
    email_personal?: string;
    phone?: string;
    headshot?: string;
    hometown_city?: string;
    hometown_state?: string;
    major?: string;
    minor?: string;
    street?: string;
    street2?: string;
    city?: string;
    state?: string;
    zipcode?: string;
    active?: boolean;
    createdTimestamp?: Date;
    modifiedTimestamp?: Date;
    linkedin_url?: string;
    user_role?: Role[];
    user_committeee?: Committee[];
    user_login_history?: LoginHistory[];
  }

  export class UserApiResponse {
    users: IUserApi[];
  }
