export interface BasicResponse {
  type: 'success' | 'error';
  message: string;
  code?: string | number;
}

export interface DataResponse {
  type: 'success' | 'error';
  message?: string;
  data: {
    [key: string]: any;
  };
}
