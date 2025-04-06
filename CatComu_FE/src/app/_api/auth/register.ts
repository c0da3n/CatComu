import { apiInstance } from "..";

interface Props {
  email: string;
  password: string;
  name: string;
}

export const register = async (body: Props) => {
  return await apiInstance().post("/cats", body);
};
