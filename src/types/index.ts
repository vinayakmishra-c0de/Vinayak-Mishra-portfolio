export interface StudentRecord {
  id: string;
  name: string;
  grade: string;
  guardian: string;
  balance: number;
}

export interface CartItem {
  id: string;
  sku: string;
  title: string;
  category: 'uniform' | 'books' | 'accessories';
  size?: string;
  quantity: number;
  unitPrice: number;
  rackLocation: string;
}

export interface DefectiveItem {
  id: string;
  sku: string;
  item: string;
  defectReason: string;
  vendor: string;
  units: number;
  costRecovered: number;
  quarantinedAt: string;
  status: 'quarantined' | 'vendor_debited' | 'replaced';
}

export interface RetailerProfile {
  id: string;
  companyName: string;
  gstin: string;
  totalCreditLimit: number;
  currentExposure: number;
  avgPaymentDays: number;
  riskRating: 'Tier 1 Prime' | 'Tier 2 Moderate' | 'Tier 3 High Risk';
  lastSettlement: string;
  status: 'active' | 'review' | 'locked';
}

export interface SkuVelocityItem {
  id: string;
  sku: string;
  name: string;
  category: string;
  weeklyUnits: number;
  marginPercent: number;
  capitalTiedUp: number;
  daysIdle: number;
  velocityStatus: 'high_velocity' | 'healthy' | 'stalled_dead';
  actionRecommendation: string;
}

export interface AuditSubmission {
  name: string;
  businessName: string;
  businessType: string;
  monthlyRevenue: string;
  primaryBottleneck: string;
  notes: string;
}
