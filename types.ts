export interface MethodCategory {
  name: string;
  items: string[];
}

export interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  icon: string; // Icon name reference
  methodCategories: MethodCategory[]; // Structured methods with sub-items
  libraries: string[]; // Python libraries used
}

export interface StatCardData {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
  description: string;
  color: string; // Tailwind color class (e.g., text-orange-400)
}