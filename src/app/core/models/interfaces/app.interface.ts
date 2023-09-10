export interface HazeAppConfig {
  activation: {
    apiKey: string;
  };
  database: {
    databaseType: string;
    host: string;
    username: string;
    password: string;
    database: string;
    port: number;
  };
  config: {
    language: string;
    timezone: string;
    adminsList: HazeAppConfigAdmin[];
  };
}

export interface HazeAppConfigAdmin {
  email: string;
  password: string;
}
