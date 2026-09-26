import { createQueryString, request } from "./client";
import type { AdminAuditListResponse } from "./types";

/**
 * Admin audit API.
 *
 * This is the single implementation for listing admin audit entries.
 * The former duplicate `adminApi.audit.list` in `admin.ts` has been
 * consolidated here so audit listing has one guarded implementation.
 */
export const adminAuditApi = {
  list: (token: string, params?: { page?: number; limit?: number }) =>
    request<AdminAuditListResponse>(
      `/admin/audit${createQueryString({
        page: params?.page,
        limit: params?.limit,
      })}`,
      { token },
    ),
};
