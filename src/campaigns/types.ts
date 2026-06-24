export type CampaignType =
  | "BACK_TO_SCHOOL"
  | "SUMMER_PLAYHOUSE"
  | "MYSTERY_GIFT";

export interface CampaignConfig {
  theme: {
    primary: string;
    background: string;
  };

  overlay?: string;
}