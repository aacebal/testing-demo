import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let component: VoteComponent

  beforeEach(() => {
    component = new VoteComponent();
  });
  // Arrange
  // let component = new VoteComponent();

  it('should increment total votes when upvoted', () => {
    // Act
    component.upVote();

    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrease total votes when downvoted', () => {
    // let component = new VoteComponent;

    component.downVote();

    expect(component.totalVotes).toBe(-1);
  });
});

// beforeEach(() => {
//   set up
// })

// afterEach(() => {
//   tear down
// })