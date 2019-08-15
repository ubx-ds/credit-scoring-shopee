
/**
 * followers
 * rating
 * no_of_ratings
 * date_joined
 * cancellation_rate
 * chat_performance
 */

function computeScore(shop_details) {

  let score = (computeBusinessAge(date_joined) + computeActualRating(rating, no_of_ratings, date_joined)
    + computeCancellationRate(cancellation_rate) + chat_performance) / 4;

  return score;
}

function computeBusinessAge(date_joined) {
  if(date_joined < 12)
    return 60;
  else if(date_joined > 12 && date_joined < 24)
    return 80;
  else if(date_joined > 24 && date_joined <36)
    return 90;
}

function computeActualRating(rating, no_of_ratings, date_joined) {
  let actual_rating = (no_of_ratings / date_joined) * rating;

  if(actual_rating < 50)
    return 60;
  else if(actual_rating > 100)
    return 85;
  else if(actual_rating > 200)
    return 100;
}

function computeCancellationRate(cancellation_rate) {
  return 100 - cancellation_rate;
}