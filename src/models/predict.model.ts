export interface PredictRequest {
  data_input: string;
}

export interface PredictResponse {
  result: string;
  confident: number;
}
