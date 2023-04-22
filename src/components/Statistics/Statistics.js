import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsContainer, OptionList, Options } from './Statistics.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatisticsContainer>
    <OptionList>
      <Options>Good: {good}</Options>
      <Options>Neutral: {neutral}</Options>
      <Options>Bad: {bad}</Options>
      <Options>Total: {total}</Options>
      <Options>Positive percentage: {positivePercentage}%</Options>
    </OptionList>
  </StatisticsContainer>
);
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
