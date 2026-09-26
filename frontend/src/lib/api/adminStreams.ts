import { createQueryString, request } from "./client";
import type {
  AdminStreamListResponse,
  StreamStatus,
  VestingState,
} from "./types";

export interface AdminStreamListParams {
  page?: number;
  limit?: number;
  status?: StreamStatus;
  vestingState?: VestingState;
  adminTag?: string;
}

export const adminStreamsApi = {
  list: (token: string, params?: AdminStreamListParams) =>
    request<AdminStreamListResponse>(
      `/admin/streams${createQueryString({
        page: params?.page,
        limit: params?.limit,
        status: params?.status,
        vestingState: params?.vestingState,
        adminTag: params?.adminTag,
      })}`,
      { token },
    ),
};
