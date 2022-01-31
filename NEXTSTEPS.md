# PADOQ: Next Steps

## Self-evaluation and reflection

* How you approached the test

    As I lacked a computer for much of the avaliable period I had to look at the problem away from using technology. Whilst I was able to identify components and draw out a wire-frame for how the test should look, it was of course a barrier, though an enjoyable challenge!



* What you would do differently if you took the test again

    Testing should be higher priority! As I felt the change from stateful to stateless would cause failure in the suites, I ultimately ended up with less time for testing, despite the files being one of the first things I did (being able to do these on the day I first accessed and cloned the repo).

    The final result was a to-do list that did not render the extant Todos list, though it was happily loading and rendering the top-level app and the submission button.  Good TDD would identify exactly where the bugs are and allow these to be identified in real time. The tests also did not make use of mock data, for the same reason, which is a big amount of testing functionality. 

    I would perhaps focus on one component at a time. On splitting apart the components i went through removing redundant artifacts (such as the 'this' references). As such many things broke at once. I would prefer to take my time and be more methodical. 

* Improvements to the application you can suggest that could be implemented, and an estimation of how much time they would take.

    Assuming full functionality of the app: additional functions could be the abilty to remove completed tasks. This would involve maps and filters: remove all rendered items for which the `<s>` JSX is evident. This would make individual `delete` buttons redundant and can be removed. 

        Time: repurposing the delete mechanism would remove it from the individual items and to the list as whole. With all other components working optimally this could be managed with one or two functions... and relevant testing.  

    CSS could be more dynamic to make the list more interesting. Currently there is an "on hover" effect on the `Add to List` button. This could be more interesting, or of a better colour scheme. There are further ways the design could be better, such as fading out the completed tasks (conditional on being scored out, they could be grey?)

        Time: entirely dependent on what is desirable. It is important not to do too much - nobody wants a busy list!

    The list could have more accessibilty features. The items could also render as alt-text, meaning that for a version where the list persists, it can be used with screen-readers. Similar functionality could be built in with high-contract CSS or variable font sizes. However, most modern browsers and tech interfaces have accessibility preferences that override design defaults. 

        Time: quite an extensive task, especially if the goal is to be robost. However, it would be very worthwhile investment for the customer base if so. 