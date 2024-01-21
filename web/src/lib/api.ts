import axios from "axios";

export const api = axios.create({
    baseURL: 'http://192.168.0.103:3333',
}) // Passar o IP da máquina e a porta do Back-End.
