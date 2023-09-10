export interface BasicStatus {
  type: 'success' | 'error';
  message: string;
  code?: string | number;
}
