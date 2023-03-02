import axios from "axios";

const BASE_URL="https://sigma-mern-app.onrender.com/api/"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzY2NjBmMTA4ZTZiY2UwN2VhMWMyMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTc0MTcyNSwiZXhwIjoxNjcwMDAwOTI1fQ._i3vx-QyJDX2Y6dZcBsn7dxfSHFgEyEs8bG0V6GSRc0"

export const publicRequest=axios.create({
    baseURL:BASE_URL,
});
export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
});

