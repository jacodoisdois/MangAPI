import axios, { type AxiosInstance } from 'axios'

export default function axiosInstance (baseURL: string, headers: any): AxiosInstance {
  return axios.create({
    baseURL,
    headers
  })
}
