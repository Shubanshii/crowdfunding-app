console.log("getting dem campaignz");

let user = "";

function getUser(callback) {
  const settings = {
    type: "GET",
    url: "/user",
    dataType: "json",
    success: callback
  };
  $.ajax(settings);
}

function printUser(data) {
  console.log(data._id);
  user = data._id;
}

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
  console.log("user inside display func", user);
  let template = "";
  for (let i = 0; i < data.length; i++) {
    template = `<li>Artist: ${data[i].artist}<li>Title: <a href="/campaigns/${
      data[i]._id
    }">${data[i].title}</a></li></li>`;
    $(".campaigns").append(template);
    if (user === data[i].user) {
      $(".your-campaigns").append(template);
    }
  }
}

$(function() {
  getUser(printUser);
  getCampaigns(displayCampaigns);
});
