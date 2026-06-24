import React, {
  createContext,
  useContext,
  ReactNode,
} from "react";

import { CampaignRegistry }
from "../campaigns/campaignRegistry";

const CampaignContext =
  createContext(
    CampaignRegistry.BACK_TO_SCHOOL
  );

interface Props {
  value: typeof CampaignRegistry.BACK_TO_SCHOOL;
  children: ReactNode;
}

export function CampaignProvider({
  value,
  children,
}: Props) {
  return (
    <CampaignContext.Provider
      value={value}
    >
      {children}
    </CampaignContext.Provider>
  );
}

export function useCampaign() {
  return useContext(CampaignContext);
}