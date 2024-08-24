import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'd9d17a22-4c1a-4354-96c0-fdedc9fd5278',
};

export const sampleWithPartialData: IAuthority = {
  name: '21446c09-c971-4285-b0fe-cb11f189dcb7',
};

export const sampleWithFullData: IAuthority = {
  name: '02c5d1c4-861f-455d-96a7-54e94dd6a1bc',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
