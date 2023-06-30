
# Organizational Bucket-List App

This is an organizational app used to organize your goals, 
  aspirations, and dreams into user-friendly categories. 
You can mark your goals as complete once achieved, 
  and it acts like a journal entry for your accomplishments.

## Link to Hosted App

You can access the hosted app at: https://white-field-5993.fly.dev/

## Technologies Used

The app is built using the following technologies:

- Front-end: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose

## Approach

The app utilizes 5 different models, each representing a specific themed category. 
The pages are split up based on these categories to provide a more organized experience for the user. 
The decision to use multiple models was made to handle the unique requirements and page rendering for each category.

Challenges were encountered in managing multiple pages and coordinating the logic for marking goals as complete. 
Further research is required to explore the possibility of using a single model to simplify the implementation.

## Unsolved Problems

- One unsolved problem relates to the "Complete" button functionality.
    Although the logic to move goals from the incomplete section to the completed section is in place,
    the button currently displays a "complete" message instead of directly navigating to the completed section.
    This behavior needs to be updated for a more seamless user experience.

- Another unresolved issue is related to uploading photos.
  While an upload button is implemented, it does not currently save the uploaded image or generate a link to it.
  Further development is needed to address this functionality.

## Future Enhancements

- Enhance the CSS styling to make the cards visually appealing with a 3D effect.
- Implement a navigation bar that changes color to indicate the active page, providing visual feedback to the user.
- Refine the completed page rendering to display the completed goals in the correct position
   and provide a direct link to the newly achieved dream/accomplishment.

## User Stories

- As a user, I want this app to act as an online journal log for my goals, aspirations, and dreams.
- As a user, I want to be able to organize my goals, aspirations, and dreams into different categories.
- As a user, I want to mark my goals as complete once achieved and have them displayed in a separate section.
- As a user, I want to prioritize my goals and provide descriptions for each one.
- As a user, I want to add comments, thoughts, and ratings to my completed goals.
- As a user, I want to be able to upload photos related to my goals.
  

## Notes to Myself

- Research the possibility of using a single model instead of multiple models to simplify the implementation.
- Investigate and fix the "Complete" button functionality to navigate directly to the completed section.
- Address the issue with uploading photos and saving the image links.
- Improve the CSS styling to create a visually appealing user interface.

