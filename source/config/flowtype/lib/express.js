declare module 'express' {
  declare type NextFunction = (error?: Object) => void

  declare class Request {
    headers: {[key: string]: string};
  }

  declare class Response {
    status(statusCode: number): Response;
    //as far as I remember json method uses stringify underneath which
    // means that you would want to check you object here so it want crash
    // your JSON.parse on the other end. If it's possible obviuosly
    // At least it should be Object | Array<any>
    json(body: any): Response;
  }
  declare class app {
      use(args: any): string;
      post(args: any): string;
  }
  declare module.exports: () => app;
}
