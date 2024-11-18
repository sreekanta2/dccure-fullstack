import { type User } from "@/app/api/user/data";
import { api } from "@/config/axios.config";
import avatar from "@/public/images/avatar/avatar-6.jpg";
export const registerUser = async (data: User) => {
  try {
    const response = await api.post("/user/register", data);

    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export { avatar };
