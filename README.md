# cy
Given Cypress does't support working with mutltiple tabs, I was not abble to write a proper test using this tool.
I Tried several workarownds, but none worked given that the new tab is fired toguether a redirect in the main tab.

```Because Cypress runs in the browser, it will never have multi-tabs support. We do have access to the browser automation APIs to actually switch tabs, but there is no reason for us to ever expose them.
(...)To take this a step further - we don't believe there is any use case for testing the browser's native behavior
(...)You already know that is what the browser is designed to do. (https://docs.cypress.io/guides/references/trade-offs#Multiple-tabs)```

The test report generated by Guthub actions for the last execution can be seen on https://angelicalima.github.io/luxoft/