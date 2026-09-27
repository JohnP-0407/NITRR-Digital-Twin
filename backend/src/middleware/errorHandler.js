import { ZodError } from "zod";

export function notFoundHandler(request, _response, next) {
  const error = new Error(`Cannot ${request.method} ${request.originalUrl}`);
  error.statusCode = 404;
  next(error);
}

export function errorHandler(error, _request, response, _next) {
  if (error instanceof ZodError) {
    return response.status(400).json({
      error: {
        message: "Request validation failed.",
        details: error.issues.map(({ path, message }) => ({ path, message })),
      },
    });
  }

  const statusCode = Number.isInteger(error.statusCode) ? error.statusCode : 500;
  if (statusCode >= 500) {
    console.error(error);
  }

  return response.status(statusCode).json({
    error: {
      message: statusCode >= 500 ? "Internal server error." : error.message,
    },
  });
}