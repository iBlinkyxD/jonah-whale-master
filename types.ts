
export interface NavItem {
  label: string;
  href: string;
}

export interface InteractivePoint {
  id: string;
  label: string;
  description: string;
  x: number; // percentage
  y: number; // percentage
  icon: 'education' | 'innovation' | 'whale';
}
