import { Client } from 'appwrite';

const client = new Client();

console.log('REACT_APP_API_ENDPOINT:', process.env.REACT_APP_API_ENDPOINT);
console.log('REACT_APP_PROJECT_ID:', process.env.REACT_APP_PROJECT_ID);

client.setEndpoint(process.env.REACT_APP_API_ENDPOINT || 'https://your-appwrite-endpoint').setProject(process.env.REACT_APP_PROJECT_ID);


export default client;

