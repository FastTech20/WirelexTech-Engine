
export enum statusMsg {
    failure = "failure", success = "sucess"
}

export class AppResponse {
    status: statusMsg;
    message: string;
    data?: any;
    token?: string;
    constructor(status: statusMsg, message: string, data?: any, token?: string) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.token = token;
    }
}



