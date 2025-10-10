/**
 * Leadership and Team Types
 * Defines the structure for team member profiles and leadership information
 */

export interface Leader {
  id: string;
  name: string;
  title: string;
  biography: string;
  photo: string;
  militaryService?: string;
  expertise: string[];
  education?: string[];
  certifications?: string[];
  yearsOfExperience?: number;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  department: string;
  photo?: string;
  bio?: string;
  expertise?: string[];
}

export interface MilitaryService {
  branch: string;
  rank: string;
  yearsOfService: number;
  specializations?: string[];
  awards?: string[];
}