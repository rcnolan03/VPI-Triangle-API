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
  webRole?: string;
  lastLogin?: string; //This will be deprecated  
  emailVerified?: boolean;
  linkedInUrl?: string;
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