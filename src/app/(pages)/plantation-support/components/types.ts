export interface Donation {
  id: string;
  donorName: string;
  amount: number;
  currency: string;
  message?: string;
  isAnonymous: boolean;
  createdAt: string;
}

export interface DonationResponse {
  data: Donation[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
