const avatarUrl = "https://api.adorable.io/avatars/64/";

module.exports = () => ({
  speakers: [
    {
      id: "1",
      firstname: "Matt",
      lastname: "Reetz",
      title: "Software Engineer",
      company: "Headway",
      avatar: `${avatarUrl}matt`,
      biography: "Matt is a coding ninja.",
      email: "matt@headway.io"
    },
    {
      id: "2",
      firstname: "Tim",
      lastname: "Gremore",
      title: "Software Engineer",
      company: "Headway",
      avatar: `${avatarUrl}tim`,
      biography: "Tim is a coding wizard.",
      email: "tim@headway.io"
    },
    {
      id: "3",
      firstname: "Jay",
      lastname: "Rude",
      title: "Software Engineer",
      company: "Acme",
      avatar: `${avatarUrl}tim`,
      biography: "Jay is not a coding wizard.",
      email: "jay@acme.io"
    }
  ],
  events: [
    {
      id: "1",
      title: "Conference Kickoff",
      description:
        "Conference Welcoming Party. Drinks and Food will be served.",
      speakerIds: ["1", "2"],
      start: "2019-08-23T08:00:00.000Z",
      hours: 1
    },
    {
      id: "2",
      title: "Conference Send Off",
      description: "Good bye and good luck!",
      speakerIds: ["2", "1"],
      start: "2019-08-24T08:00:00.000Z",
      hours: 0.5
    }
  ]
});
