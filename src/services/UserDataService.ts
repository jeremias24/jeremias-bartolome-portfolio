import http from "@/common/http";

class UserDataService {
    getAll(): Promise<any> {
        return http.get("/users/show-all");
    }

    get(id: any): Promise<any> {
        return http.get(`/user/show/${id}`);
    }

    create(data: any): Promise<any> {
        return http.post("/users", data);
    }

    update(id: any, data: any): Promise<any> {
        return http.put(`/users/${id}`, data);
    }

    delete(id: any): Promise<any> {
        return http.delete(`/users/${id}`);
    }

    deleteAll(): Promise<any> {
        return http.delete(`/users`);
    }

    findByTitle(title: string): Promise<any> {
        return http.get(`/users?title=${title}`);
    }
}

export default new UserDataService();