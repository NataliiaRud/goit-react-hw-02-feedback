import React from 'react';
import PropTypes from 'prop-types';

import {
  FeedbackContainer,
  FriendsList,
  FeedbackBtn,
  FriendsItem,
} from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackContainer>
      <FriendsList>
        {options.map(option => (
          <FriendsItem key={option}>
            <FeedbackBtn
              key={option}
              type="button"
              value={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </FeedbackBtn>
          </FriendsItem>
        ))}
      </FriendsList>
    </FeedbackContainer>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),

  onLeaveFeedback: PropTypes.func.isRequired,
};
