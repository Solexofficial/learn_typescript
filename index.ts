enum StatusCodes {
  NotFound = 404,
  ServerError = 500,
}

function sum(a: StatusCodes, b: StatusCodes): StatusCodes {
  return a + b;
}

sum(StatusCodes.ServerError, StatusCodes.NotFound);

StatusCodes.ServerError[500] = 'ServerError';
