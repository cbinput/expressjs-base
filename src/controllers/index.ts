import { Request, Response } from "express";
import Logger from "../libs/logger";

/**
 * GET / route
 */
export const GET = async (req: Request, res: Response): Promise<void> => {
    if (!req.params.id)
        Logger.info('GET ok');
    else
        Logger.info(`GET by id ok ${req.params.id}`);
    res.jsonp({ data: { msg: "its all good man" }});
};

/**
 * POST / route
 */
 export const POST = async (req: Request, res: Response): Promise<void> => {
    Logger.info('POST ok');
    res.jsonp({ data: { msg: "its all good man" }});
};

/**
 * PUT / route
 */
 export const PUT = async (req: Request, res: Response): Promise<void> => {
    Logger.info('PUT ok');
    res.jsonp({ data: { msg: "its all good man" }});
};

/**
 * PATCH / route
 */
 export const PATCH = async (req: Request, res: Response): Promise<void> => {
    Logger.info('PATCH ok');
    res.jsonp({ data: { msg: "its all good man" }});
};

/**
 * DELETE / route
 */
 export const DELETE = async (req: Request, res: Response): Promise<void> => {
    Logger.info('DELETE ok');
    res.jsonp({ data: { msg: "its all good man" }});
};