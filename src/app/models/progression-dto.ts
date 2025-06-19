// models/progression-dto.ts
export interface ProgressionDTO {
  detailsProgression: string;
  percentageCompletion: number;
  userGame: {
    id: number;
  };
}
