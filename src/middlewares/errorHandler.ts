import { NextFunction, Request, Response } from "express";
import Logger from '../libs/logger';

declare type WebError = Error & { status?: number };

export const errorHandler = (err: WebError, req: Request, res: Response, next: NextFunction): void => {
    const mappedError = { status: err.name, statusCode: err.status || 500, message: err.message };
    Logger.error(`mapped error: ${JSON.stringify(mappedError)}`);
    res.status(mappedError.statusCode);
    res.send(mappedError);
};

export const errorNotFoundHandler = (req: Request, res: Response, next: NextFunction): void => {
    const mappedError = { status: "NOT_FOUND", statusCode: 404, message: "resource not found" };
    Logger.error(`mapped error: ${JSON.stringify(mappedError)}`);
    res.status(mappedError.statusCode);
    res.send(mappedError);
};