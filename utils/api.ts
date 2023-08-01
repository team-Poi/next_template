import { NextApiRequest, NextApiResponse } from "next";

export type API_Response = {
  type: "SUCCESS" | "ERROR" | "UNAUTHENTICATED" | "INPROGRESS" | "WARNING";
  data?: any;
  error?: any;
};

export type API_Handler = (
  req: NextApiRequest,
  res: NextApiResponse<API_Response>
) => any;

export interface API_Props {
  GET?: API_Handler;
  POST?: API_Handler;
  PUT?: API_Handler;
  DELETE?: API_Handler;
  ANY?: API_Handler;
}

export default function API(apiProps: API_Props) {
  return (req: NextApiRequest, res: NextApiResponse<API_Response>) => {
    switch (req.method) {
      case "GET":
        if (apiProps.GET) return apiProps.GET(req, res);
      case "POST":
        if (apiProps.POST) return apiProps.POST(req, res);
      case "PUT":
        if (apiProps.PUT) return apiProps.PUT(req, res);
      case "DELETE":
        if (apiProps.DELETE) return apiProps.DELETE(req, res);
      default:
        if (apiProps.ANY) return apiProps.ANY(req, res);
    }

    return res.status(405).send({
      type: "ERROR",
      error: "Method Not Allowed",
    });
  };
}
