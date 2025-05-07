type IChatRequest = {
    description: string;
  };
  
type IChatResponse = {
    links: { [key: string]: string };
    timestamp: string;
};
  
export { type IChatRequest, type IChatResponse };