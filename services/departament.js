
async function getDepartaments(id) {
  let ids = String(id).split(",")
  let features = []

  ids.forEach(element => {
    const dept = require(`./../data/${element}.json`)
    features.push(dept)
  });


  const data = {
    type: "FeatureCollection",
    features
  }
  return data;
}

module.exports = getDepartaments;
