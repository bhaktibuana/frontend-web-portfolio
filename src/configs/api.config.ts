interface apiUrlInface {
  apiV1: string;
  apiV2: string;
}

const apiUrl = (): apiUrlInface => {
  return {
    apiV1:
      process.env.NODE_ENV === "production"
        ? "https://api-portfolio.bhaktibuana.com/api/v1"
        : "http://localhost:3001/api/v1",
    apiV2:
      process.env.NODE_ENV === "production"
        ? "https://api-portfolio.bhaktibuana.com/api/v2"
        : "http://localhost:3001/api/v2",
  };
};

export default apiUrl;
