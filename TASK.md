🎨 Frontend Wizards — Stage 1 Task

Multi-Page App: Contact Form + About Me Page

Welcome to Stage 1! 🎉
This stage expands your project from a single card into a multi-page application, introducing form handling, validation, accessibility, and richer semantic structure.

> Note: This is a continuation of your Stage 0 work. You will extend the existing project, not start a new one.



---

📚 Recommended Study Resources

Semantic HTML & Accessibility
https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML

HTML/JS Form Validation
https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation

Accessibility for Forms
https://www.w3.org/WAI/tutorials/forms/

Responsive Layouts
https://css-tricks.com/snippets/css/media-queries-for-standard-devices/



---

📝 Task Overview — Build Two New Pages


---

1️⃣ Contact Us Page

A fully-validated, accessible form.

Required Fields

Each must include the specified data-testid:

Field	data-testid

Full name	test-contact-name
Email	test-contact-email
Subject	test-contact-subject
Message	test-contact-message
Submit button	test-contact-submit
Error message per field	test-contact-error-<field> (e.g., test-contact-error-email)
Success message	test-contact-success


Validation Rules

All fields are required

Email must be in valid format (name@example.com)

Message must be at least 10 characters

On valid submission → show success message


Accessibility Requirements

Every input must have a connected <label for="…">

Error messages must be associated with inputs using aria-describedby

Entire form must be keyboard accessible



---

2️⃣ About Me Page

A reflective page showcasing your thoughts, wrapped in proper semantic structure.

Required Sections

Each requires its own data-testid:

Section	data-testid

Bio	test-about-bio
Goals in this program	test-about-goals
Areas of low confidence	test-about-confidence
Note to future self	test-about-future-note
Extra thoughts	test-about-extra


Semantic Structure

Wrap entire page in:

<main data-testid="test-about-page">

Use <section> for each topic

Use headings (<h2>, <h3>) to organize content clearly



---

✅ Acceptance Criteria

Contact Us Page

All required fields and test IDs present

Validation prevents incorrect submissions

Success message appears only on valid submission


About Me Page

All required sections included with correct test IDs

Semantic HTML structure followed


General Requirements

Proper semantic HTML (main, section, header, etc.)

Fully accessible (labels, ARIA attributes, alt text)

Responsive on mobile, tablet, and desktop

Entire UI is keyboard navigable

Clean, modular, consistent code structure
