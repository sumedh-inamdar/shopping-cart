# Shopping Cart

Shopping cart site where user can navigate multiple pages and add / delete products.

-> <a href="https://sumedh-inamdar.github.io/shopping-cart/">link to page</a> <-

![front page screenshot](./src/assets/shoppingCartScreenshot.png)

## Lessons learned

### Technologies
- React-Router-DOM
- React Testing Library
- Tailwind CSS
- CSS Animations (custom keyframes, delays, fill-mode, etc..)

### Debugging takeaways
* Avoid nesting components to avoid re-render issues (auto lose input focus)
* jest-dom matchers do not work well with Tailwind CSS classes

## Testing List

### Unit Tests
- [x] Nav: Mobile menu rendered on click, shopping cart quantity displayed
- [x] Home: Load content with intersection observer
- [x] ItemOption: Select element calls hook onChange with correct unitPrice, options
- [x] ItemQuantity: Text input and increment / decrement buttons. Input validity test.
- [x] AddButton: Mock setCart hook and check for correct argurments - empty cart and existing items

### Integration Tests
- [x] Site navigation
- [ ] Navigate to store, add different items, and go to checkout

### End to End Tests


## Bugs to fix

- [x] Space below footer on empty checkout page
- [ ] text-underline-offset property rendering unexpected on Safari 15.3

## Future work
