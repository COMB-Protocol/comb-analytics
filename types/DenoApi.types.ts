type TokenFeeDistributionAmounts = {
  token: string;
  teamAmount: number;
  teamAmountUSD: number;
  distributorAmount: number;
  distributorAmountUSD: number;
  amount: number;
  amountUSD: number;
};

type FeeDistribution = {
  timestamp: Date;
  tokens: TokenFeeDistributionAmounts[];
};

type FeeDistributionTokenTotal = {
  token: string;
  totalDistributorRewardsUSD: number;
  totalTeamFeesUSD: number;
  totalRewardsUSD: number;
  totalRewards: number;
};
