function main() {
    function increaseKeywordBid() {
        var keywordIterator = AdsApp.keywords() // Get keywords from Google Ads api
            .withCondition("CampaignName = 'Awesome Search Campaign'")
            .forDateRange('LAST_MONTH')
            .orderBy('Impressions DESC')
            .get();

        while (keywordIterator.hasNext()) {
            var keyword = keywordIterator.next();
            var metrics = keyword.getStatsFor('LAST_MONTH');
            var CTR = metrics.getCtr() * 100;   // CTR is a decimal so convert the decimal by 100 for easier reading
            var newBid = metrics.getAverageCpc() * 2;  // Creating doubled CPC

            if (keyword.isEnabled()) {
                if ((CTR > 6) && (metrics.getConversions() > 0)) { // Getting high performing keywords for report
                    Logger.log(keyword.getText() + ':');
                    Logger.log("CTR: " + CTR.toFixed(2));
                    Logger.log("Impressions: " + metrics.getImpressions());
                    Logger.log("Clicks: " + metrics.getClicks());
                    Logger.log("Conversions: " + metrics.getConversions());

                    if (metrics.getImpressions() < 100) { 
                        keyword.bidding().setCpc(newBid); // Set new CPC
                    }
                }
            }
        }
    }
    increaseKeywordBid();
}
