export interface DbType {
  user: string,
  host: string,
  database: string,
  password?: string,
  port: number 
}

export interface DbQueryType {
  query: string,
}