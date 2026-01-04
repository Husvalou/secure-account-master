export interface Step {
  points: string[];
}

export interface Guide {
  id: string;
  name: string;
  icon: string;
  iconWidth?: number;
  steps: Step[];
  description: string;
}

export interface Platform {
  id: string;
  name: string;
  icon: string;
  iconWidth?: number;
}

