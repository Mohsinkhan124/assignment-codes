

let userGit = async () => {
  try {
    let userdata = await fetch("https://api.github.com/users",  {
  headers: {
    Authorization: "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"
  }
  });
    let response = await userdata.json();

    let card = document.getElementById("card");

    for (let elem of response) {
      let userDetail = await fetch(elem.url);
      let detail = await userDetail.json();
      console.log(detail);
      

      card.innerHTML += `
        <div class="box">
          <div class="row-images">
            <div class="circle-image" style="background-image: url(${elem.avatar_url})"></div>
            <div class="circle-id"><h3>${elem.id}</h3></div>
          </div>
          <div class="user-name">
            <h2>${elem.name}</h2>
            <a href="${elem.html_url}" target="_blank">View Profile</a>
          </div>
          <div class="stats">
            <div class="stat">
              <h4>Repos</h4>
              <h2>${detail.public_repos}</h2>
            </div>
            <div class="stat">
              <h4>Followers</h4>
              <h2>${detail.followers}</h2>
            </div>
            <div class="stat">
              <h4>Following</h4>
              <h2>${detail.following}</h2>
            </div>
          </div>
          <h4>Location: ${detail.location}</h4>
        </div>
      `;
    }

  } catch (err) {
    console.log(err.message);
  }
}

userGit();
