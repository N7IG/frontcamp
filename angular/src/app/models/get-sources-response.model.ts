import { NewsSource } from "./news-source.model";

export interface GetSourcesResponse {
    status: string;
    sources: NewsSource[];
}
