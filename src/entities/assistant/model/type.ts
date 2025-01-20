type IChatRequest = {
    description: string;
  };
  
type IChatResponse = {
    links: string[];
    timestamp: string;
};
  
export { type IChatRequest, type IChatResponse };