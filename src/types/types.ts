export interface Token {
  address: `0x${string}`;
  name: string;
  symbol: string;
  decimals: number;
  flag?: boolean;
  logo?: string;
}

export interface SwapToken {
  token: Token;
  balance: string;
  amount: string;
  amountLoading: boolean;
}
