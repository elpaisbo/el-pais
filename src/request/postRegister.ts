import axios from "./axios";

export const postRegister = async (post: Partial<Register>) => {
    try {
        const res = await axios.post("api/register", post, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        // console.log(res);
        return res;
    } catch (err: any) {
        if (err.response) {
            console.log(err.response.data.message);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else {
            console.log(`Error: ${err.message}`);
        }
        return err.response;
    }
};
