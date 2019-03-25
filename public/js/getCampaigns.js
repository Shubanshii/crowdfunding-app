console.log("getting dem campaignz");

function getCampaigns(callback) {
  const settings = {
    type: "GET",
    url: "/campaigns",
    dataType: "json",
    success: callback
  };
  $.ajax(settings);
}

function displayCampaigns(data) {
  console.log("da oods", data);
  let template = "";
  for (let i = 0; i < data.length; i++) {
    template = `<li>Artist: ${data[i].artist}<li>Title: <a href="/campaigns/${
      data[i]._id
    }">${data[i].title}</a></li></li>`;
    $(".campaigns").append(template);
  }
}

$(function() {
  getCampaigns(displayCampaigns);
});
