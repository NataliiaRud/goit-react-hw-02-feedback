import { Component } from "react";
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import{AppContainer} from "./App.styled"


export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  leaveFeedback = (e) => {
    this.setState({ [e]: this.state[e] + 1 });
 }
  countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  countPositiveFeedbackPercentage = ({ good }) =>
    Math.round((good * 100) / this.countTotalFeedback(this.state)) || 0;
  render() {
    return (
      <AppContainer>
        <Section title="Please leave feedback">
         <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveFeedback}
          />
          </Section>
        <Section title="Statistics">
          {/* {this.state.good + this.state.neutral + this.state.bad>0} */}
          {(this.state.good + this.state.neutral + this.state.bad)>0?<Statistics
            good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback(this.state)}
            positivePercentage={this.countPositiveFeedbackPercentage(this.state)}/>:<Notification message={"There is no feedback"}/>}
        </Section>
      </AppContainer>
    );
  }
}

