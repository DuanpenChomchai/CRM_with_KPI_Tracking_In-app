import { Request , Response} from "express";
export const test = (req: Request, res: Response) => {
    res.send("Auth controller is working");
}