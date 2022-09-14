type TokenFeeDistributionAmounts = {
  token: string;
  amount: number;
  amountUSD: number;
};

type FeeDistribution = {
  timestamp: Date;
  tokens: TokenFeeDistributionAmounts[];
};

type FeeDistributionTokenTotal = {
  token: string;
  totalRewardsUSD: number;
  totalRewards: number;
};
