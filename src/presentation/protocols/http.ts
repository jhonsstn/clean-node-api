export interface HttpResponse {
  statusCode: 400 | 500
  body: any
}

export interface HttpRequest {
  body?: any
}
