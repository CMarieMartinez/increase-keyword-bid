# increase-keyword-bid
Increasing keyword bids in Google Ads based on CTR, conversions and impressions

The code gets keywords from the Google Ads api and reports all the high performing keywords with CTR above 6% and having any conversions. A good CTR is considered above 5%. Conversions alone don't necessarily indicate strong keywords. Strong performing keywords with less than 100 impressions need a boost in CPC to win more search auctions so the code doubles the CPC for keywords with CTR above 6%, having conversions and less than 100 impressions.

