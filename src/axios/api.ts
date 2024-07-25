import axios from "axios";

const backend_ip =
  process.env.NEXT_PUBLIC_environment == "development"
    ? "http://127.0.0.1:8000"
    : process.env.NEXT_PUBLIC_backend_server_ip;

export default axios.create({
  baseURL: backend_ip + "/api",
});
