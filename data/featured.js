/* Icon of the week (hand-picked schedule).
 *
 * week: the Monday the pick goes live (YYYY-MM-DD). It switches over at midnight UK time,
 *       straight from this list, so you can queue up weeks in advance without a deploy.
 * id:   any icon id (see `grep -n 'id: "' data/*.js`).
 * hook: one short line in the site's voice: why this one, this week.
 *
 * A week with no entry gets an automatic pick (the same for everyone that week).
 * "Past weeks" on the home page only goes back as far as `since`.
 * Run `node dev/check.mjs` after editing: it checks dates are Mondays and ids exist. */
WTF.featured = {
  since: "2026-11-09",
  weeks: [
    { week: "2026-11-09", id: "fridge-freezer-four-star",    hook: "Your freezer has stars. Here's what they actually mean." },
    { week: "2026-11-16", id: "car-tyre-pressure",           hook: "Cold mornings drop tyre pressure. That's why this light just came on." },
    { week: "2026-11-23", id: "heating-low-pressure",        hook: "The heating's back on, and so is the most common boiler fault." },
    { week: "2026-11-30", id: "car-frost-warning",           hook: "A snowflake on the dashboard isn't a fault. It's a heads-up about ice." },
    { week: "2026-12-07", id: "laundry-do-not-tumble-dry",   hook: "Christmas jumper season. Check the label before it shrinks." },
    { week: "2026-12-14", id: "carcontrols-rear-demist",     hook: "Frosty back window? This is the button that clears it." },
    { week: "2026-12-21", id: "oven-true-fan",               hook: "Christmas dinner: when the recipe says \"fan\", it means this one." },
    { week: "2026-12-28", id: "recycling-oprl-dont-recycle", hook: "Post-Christmas bins: the label that says \"not in the recycling\"." },
    { week: "2027-01-04", id: "car-glow-plug",               hook: "Diesel on a frosty morning? Wait for the coil light to go out." },
    { week: "2027-01-11", id: "ev-cold-battery",             hook: "Why electric cars lose range in winter, in one little snowflake." },
    { week: "2027-01-18", id: "coffee-descale",              hook: "Blue Monday. Don't let the coffee machine give up on you too." },
    { week: "2027-01-25", id: "toilet-stop",                 hook: "Off skiing in Japan? This is the one button to know." }
  ]
};
