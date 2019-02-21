export const newsArticleMather: jasmine.CustomMatcherFactories = {
    toBeNewsArticle: (
        util: jasmine.MatchersUtil,
        customEqualityTesters: Array<jasmine.CustomEqualityTester>
    ) => {
        return {
            compare: function(actual: any): jasmine.CustomMatcherResult {
                const newsArticleProperties: string[] = [
                    "source",
                    "author",
                    "title",
                    "description",
                    "url",
                    "urlToImage",
                    "publishedAt",
                    "content"
                ];

                let result: jasmine.CustomMatcherResult = {
                    pass: false,
                    message: ""
                };

                result.pass = newsArticleProperties.every(prop => {
                    console.log(
                        `actual.hasOwnProperty[${prop}]`,
                        actual.hasOwnProperty(prop)
                    );

                    return actual.hasOwnProperty(prop);
                });

                console.log(result.pass);

                if (result.pass) {
                    result.message =
                        "Expected " + actual + " not to be news article";
                } else {
                    result.message =
                        "Expected " +
                        actual +
                        " to be news article, but it was something else";
                }

                return result;
            }
        };
    }
};
