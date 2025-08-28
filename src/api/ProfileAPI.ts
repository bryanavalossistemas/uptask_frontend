import api from "@/lib/axios";
import { type UpdateCurrentUserPasswordForm, type UserProfileForm } from "@/types/index";
import { isAxiosError } from "axios";

export async function updateProfile(formData: UserProfileForm) {
  try {
    const url = "/auth/profile";
    const { data } = await api.put<string>(url, formData);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}

export async function changePassword(formData: UpdateCurrentUserPasswordForm) {
  try {
    const url = "/auth/update-password";
    const { data } = await api.post<string>(url, formData);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
