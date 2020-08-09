import { PredictRequest, PredictResponse } from './../models/predict.model';
import { apiCaller } from '../helpers/api-caller';
import { AxiosPromise } from 'axios';

const prefix = 'predict';

export default {
  predict(predictRequest: PredictRequest): AxiosPromise<PredictResponse> {
    return apiCaller(prefix, 'POST', predictRequest);
  },
};
