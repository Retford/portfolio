interface Activity {
  activity: string;
}

export interface Experience {
  role: string;
  company: string;
  modality: string;
  duration: string;
  location: string;
  activities: Activity[];
}
