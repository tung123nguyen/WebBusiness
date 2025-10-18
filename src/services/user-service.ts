import { getConnection } from "../config/db";

const handleCreateUser = (fullName: string, email: string, address: string) => {
  //insert DB

  //return result
  console.log("Success");
};

const getAllUser = async () => {
  const connection = await getConnection();
  const [results, fields] = await connection.query("SELECT * FROM `user`");
  return results;
};
export { handleCreateUser, getAllUser };
