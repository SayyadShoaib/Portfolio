import "./github.css";
export function Github() {
  return (
    <div
      style={{
        backgroundColor: "black",
        marginBottom: "-20px",
        textAlign: "center",
        boxShadow: " rgb(121, 18, 18) 0px 22px 70px 4px;",
      }}
    >
      <br />
      <br />
      <h1>Github Status</h1>
      <br /> <br />
      <div class="graph-1">
        <a href="https://github.com/SayyadShoaib">
          <img
            align="center"
            src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=SayyadShoaib&amp;theme=dracula&amp;bg_color=0D1117"
            alt=""
          />
          <br />
          <br />
        </a>
      </div>
      <div id="graph23">
        <a href="https://github.com/SayyadShoaib">
          <img
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=SayyadShoaib"
            alt=""
          />
        </a>
        <a href="https://github.com/SayyadShoaib">
          <img
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=SayyadShoaib"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
