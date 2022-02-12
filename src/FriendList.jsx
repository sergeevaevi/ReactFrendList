import React from "react";
import styled from "styled-components";
import {find} from "styled-components/test-utils";

const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 24px 32px;
  transition: all 0.2s;
  min-height: 150px;
  max-width: 500px;
  margin: 0 auto;
`;

function Friend (props) {
  const { friend } = props
  let number = 0;
  return (
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
  )
}

export default class FriendList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {friends: props.friends, hidden : 0};

}

  onChange = event => {
      let hidden = 0;
      this.state.friends.map((friend) => {
          let wordsInSearch = 0;
          let nameWords = friend.name.split(' ');
          let searchWords = event.target.value.toLowerCase().split(' ');
          for (let word of nameWords)
              for (let part of searchWords)
                  if(word.toLowerCase().startsWith(part)){
                      wordsInSearch++;
                      searchWords.splice(searchWords.indexOf(part), 1)
                      break;
                  }
          friend.hide = !(searchWords.length === 0)
              && !friend.username.toLowerCase().startsWith("@"+event.target.value.toLowerCase())
          && event.target.value!=="";
          if(friend.hide) hidden++;
          return friend;
      })
      this.setState((currentState) => {
          return {
              friends: currentState.friends,
              hidden: hidden
          }
      })
  }

  render() {
    const friends = this.state.friends;
    return  <Container>
      <div className="header">Friends</div>
      <input onChange={e => this.onChange(e)} className="filter-input" placeholder="Search..."/>
      <div className="friend-list">
          {friends.map(friend => !friend.hide && <Friend  key={friend.username} friend={friend}/>)}
          {(this.state.hidden === friends.length)
          && <div className="friend-list-item__none">No friends found</div>}
      </div>
      </Container>;
  }
}
