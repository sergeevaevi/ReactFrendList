import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 24px 32px;
  transition: all 0.2s;
  min-height: 150px;
  max-width: 500px;
  margin: 0 auto;
`;
/*<div className="friend-list-item">
  <img
      className="friend-list-item__photo"
      src="https://randomuser.me/api/portraits/med/men/65.jpg"
  />
  <div className="friend-list-item__info">
    <div className="friend-list-item__name">Eugene Pshenichnyy</div>
    <div className="friend-list-item__username">@pshenichnyy</div>
  </div>
  <div className="friend-list-item__mutual">
    6 mutual
  </div>
</div>*/
export default class FriendList extends React.Component {
  constructor(props) {
    super(props);
      let number = 0;
      const listItems = props.friends.map((friend) =>
      <div key={number++} className="friend-list-item">
        <img
            className="friend-list-item__photo"
            src={friend.photo}
        />
        <div className="friend-list-item__info">
          <div className="friend-list-item__name">{friend.name}</div>
          <div className="friend-list-item__username">{friend.username}</div>
        </div>
        <div className="friend-list-item__mutual">
          {friend.mutualFriends}
        </div>
      </div>

);
this.state = {friends: listItems};

}
  onChange = event => {
    this.state
  }
  render() {
    return  <Container>
      <div className="header">Friends</div>
      <input onChange={e => this.onChange(e)} className="filter-input" placeholder="Search..."/>
      <div className="friend-list">
      {this.state.friends}
      </div>
      </Container>;
  }
}
