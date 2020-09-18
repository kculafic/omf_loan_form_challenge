# One Time Loan Payment Form - Front End Technical Challenge

This was a great exercise! I was able to replicate the given design closely, using Bootstrap 4 with some custom CSS.

After dialing in the basic style template, I added some jQuery / Javascript to allow the dynamic toggle feature, to flip between Checking and Debit options. Depending one which is selected, it invokes and renders the appropriate form fields and helper image (on the right panel).

I also used a library called [jQuery Form Validation](https://github.com/bnabriss/jquery-form-validation) to account for the following rules:
- Account, routing, and credit card numbers, as well as CVV, should be numbers only.
- CVV should be exactly 3 numbers.
- Routing number should be no more than 9 numbers.  

This library can quickly be installed using npm:
```
npm install jquery-form-validation
```

Once that package is installed, you should be able to view the `index.html` with full functionality.

Note: Currently, the form validations are set on 'blur', so as you tab through each form field, if requirements are not met it will generate "red-flag" style errors in the UI. This weekend I'd like to add an event listener to the `Make Payment` button to run the validators on the  entire form, *after* clicking submit but *before* the actual `POST` method is invoked and (hypothetically, sent to the back end).

Regardless, I'm happy with the overall experience and I wanted to have this project submitted before the weekend here. And I'm happy to discuss this feature further in the follow-up conversation next week :)
