import { axiosClient } from "@axios/index";

export class CodeBlock {
    static RunCode(body) {
        return axiosClient.post("/code/run", body);
    }
}
