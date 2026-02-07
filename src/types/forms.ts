/**
 * Form Types
 * Defines the structure for form submissions and validation
 */

export interface ContactSubmission {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  hearAboutUs?: string;
  timestamp: Date;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  hearAboutUs: string;
}

export interface FormValidationError {
  field: string;
  message: string;
}

export interface FormState {
  data: Partial<ContactFormData>;
  errors: FormValidationError[];
  isSubmitting: boolean;
  isSubmitted: boolean;
}

export interface NewsletterSubscription {
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  interests?: string[];
  timestamp: Date;
}

export interface CareerApplication {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  resume: File;
  coverLetter?: string;
  veteranStatus?: boolean;
  securityClearance?: string;
  timestamp: Date;
}