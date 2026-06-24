import { CampaignConfig } from "./types";

export const CampaignRegistry: Record<
  string,
  CampaignConfig
> = {
  BACK_TO_SCHOOL: {
    theme: {
      primary: "#0057FF",
      background: "#FFF176",
    },

    overlay: "school",
  },

  SUMMER_PLAYHOUSE: {
    theme: {
      primary: "#00AEEF",
      background: "#E3F2FD",
    },

    overlay: "summer",
  },

  MYSTERY_GIFT: {
    theme: {
      primary: "#D32F2F",
      background: "#FFF5F5",
    },

    overlay: "confetti",
  },
};