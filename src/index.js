import React from "react";
import ReactDOM from "react-dom";
import FriendList from "./FriendList";

const friends = [
  {
    name: "Mr Talip Haerkens",
    username: "@whitebutterfly228",
    photo: "https://randomuser.me/api/portraits/med/men/3.jpg",
    mutualFriends: 0
  },
  {
    name: "Mrs Anna Johnson",
    username: "@sadmeercat613",
    photo: "https://randomuser.me/api/portraits/med/women/87.jpg",
    mutualFriends: 3
  },
  {
    name: "Ms Olivia Young",
    photo: "https://randomuser.me/api/portraits/med/women/75.jpg",
    username: "@reddog499",
    mutualFriends: 15
  },
  {
    name: "Mr آراد رضایی",
    photo: "https://randomuser.me/api/portraits/med/men/99.jpg",
    username: "@silvergorilla967",
    mutualFriends: 0
  },
  {
    name: "Miss Freja Madsen",
    photo: "https://randomuser.me/api/portraits/med/women/54.jpg",
    username: "@crazyrabbit622",
    mutualFriends: 0
  },
  {
    name: "Mr Steef Idsinga",
    photo: "https://randomuser.me/api/portraits/med/men/35.jpg",
    username: "@organiclion357",
    mutualFriends: 8
  },
  {
    name: "Mr Clinton Pearson",
    photo: "https://randomuser.me/api/portraits/med/men/73.jpg",
    username: "@blackpeacock824",
    mutualFriends: 11
  },
  {
    name: "Mrs Lisette Loibl",
    photo: "https://randomuser.me/api/portraits/med/women/95.jpg",
    username: "@purplerabbit352",
    mutualFriends: 19
  },
  {
    name: "Mr Frederik Poulsen",
    photo: "https://randomuser.me/api/portraits/med/men/78.jpg",
    username: "@angrylion866",
    mutualFriends: 1
  },
  {
    name: "Ms Özsu Limoncuoğlu",
    photo: "https://randomuser.me/api/portraits/med/women/45.jpg",
    username: "@smallcat536",
    mutualFriends: 0
  },
  {
    name: "Mr Bertram Nielsen",
    photo: "https://randomuser.me/api/portraits/med/men/25.jpg",
    username: "@browngorilla348",
    mutualFriends: 2
  },
  {
    name: "Mrs Jennifer May",
    photo: "https://randomuser.me/api/portraits/med/women/4.jpg",
    username: "@redlion990",
    mutualFriends: 0
  }
];

ReactDOM.render(
  <FriendList friends={friends} />,
  document.querySelector("#root")
);
