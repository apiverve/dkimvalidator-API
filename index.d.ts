declare module '@apiverve/dkimvalidator' {
  export interface dkimvalidatorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface dkimvalidatorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class dkimvalidatorWrapper {
    constructor(options: dkimvalidatorOptions);

    execute(callback: (error: any, data: dkimvalidatorResponse | null) => void): Promise<dkimvalidatorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: dkimvalidatorResponse | null) => void): Promise<dkimvalidatorResponse>;
    execute(query?: Record<string, any>): Promise<dkimvalidatorResponse>;
  }
}
