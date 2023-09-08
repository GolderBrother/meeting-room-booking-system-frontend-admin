import axiosInstance from "../request/index";

export async function login(username: string, password: string) {
    return await axiosInstance.post('/user/admin/login', {
        username, password
    });
}


export async function refreshToken() {
    const res = await axiosInstance.get('/user/admin/refresh', {
        params: {
          refresh_token: localStorage.getItem('refresh_token')
        }
    });
    localStorage.setItem('access_token', res.data.access_token);
    localStorage.setItem('refresh_token', res.data.refresh_token);
    return res;
}

export async function userSearch(username: string, nickName: string, email: string, pageNo: number, pageSize: number) {
    return await axiosInstance.get('/user/list', {
        params: {
            username,
            nickName,
            email,
            pageNo,
            pageSize
        }
    });
}
