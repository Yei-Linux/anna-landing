import {
  CreateParams,
  CreateResult,
  DeleteManyParams,
  DeleteManyResult,
  DeleteParams,
  DeleteResult,
  GetListParams,
  GetListResult,
  GetManyParams,
  GetManyReferenceParams,
  GetManyReferenceResult,
  GetManyResult,
  GetOneParams,
  GetOneResult,
  UpdateManyParams,
  UpdateManyResult,
  UpdateParams,
  UpdateResult,
} from 'react-admin';

export const dataProvider = {
  getList: async (
    resource: string,
    params: GetListParams
  ): Promise<GetListResult> => {
    return {
      data: [],
      total: 0,
    };
  },
  getOne: async (
    resource: string,
    params: GetOneParams
  ): Promise<GetOneResult> => {
    return {
      data: {},
    };
  },
  getMany: async (
    resource: string,
    params: GetManyParams
  ): Promise<GetManyResult> => {
    return {
      data: [],
    };
  },
  getManyReference: async (
    resource: string,
    params: GetManyReferenceParams
  ): Promise<GetManyReferenceResult> => {
    return {
      data: [],
      total: 0,
    };
  },
  create: async (
    resource: string,
    params: CreateParams
  ): Promise<CreateResult> => {
    return {
      data: {},
    };
  },
  update: async (
    resource: string,
    params: UpdateParams
  ): Promise<UpdateResult> => {
    return {
      data: {},
    };
  },
  updateMany: async (
    resource: string,
    params: UpdateManyParams
  ): Promise<UpdateManyResult> => {
    return {
      data: [],
    };
  },
  delete: async (
    resource: string,
    params: DeleteParams
  ): Promise<DeleteResult> => {
    return {
      data: {},
    };
  },
  deleteMany: async (
    resource: string,
    params: DeleteManyParams
  ): Promise<DeleteManyResult> => {
    return {
      data: [],
    };
  },
};
