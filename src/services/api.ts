export class AppleApiService {
    private static instance: AppleApiService;
    private baseUrl = 'https://finnhub.io/api/v1/';
    private token = 'bpjsf67rh5r9328ecgvg';

    private constructor() {
    }

    public static getInstance(): AppleApiService {
        if (!AppleApiService.instance) {
            AppleApiService.instance = new AppleApiService();
        }
        return AppleApiService.instance;
    }

    async fetchNews(): Promise<any> {
        const response = await fetch(`${this.baseUrl}company-news?symbol=AAPL&from=2021-03-01&to=2021-03-15&token=${this.token}`);
        const json = await response.json();
        return json;
    }
}