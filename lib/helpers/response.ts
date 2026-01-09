interface ResponseParams {
  status: boolean;
  message: string;
  data?: any;
}

export const response = ({ status, message, data }: ResponseParams) => {
  return {
    status,
    message,
    data: data ?? null,
  };
};
