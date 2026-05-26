import { RequestHandler } from "express";

/**
 *  request params
 * @param req
 * @param res
 * @param next
 *
 *  Result : Outputs ms response time of given requests, this is to be used in conjuction with redis to test caching
 */
export const requestLogger: RequestHandler = (req, res, next) => {
  const start = process.hrtime.bigint();
  res.on("finish", () => {
    const durationMs = Number(process.hrtime.bigint() - start) / 1_000_000;
    console.log(
      `${req.method} ${req.originalUrl} ${String(res.statusCode)} - ${durationMs.toFixed(1)}ms`,
    );
  });
  next();
};
