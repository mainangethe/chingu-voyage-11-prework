# Conquerer - Clone
Conquerer is a clone template of "Conquer" Bootstrap 3 template by [templatemo]('http://www.templatemo.com/tm-476-conquer').

This version is a pure HTML 5, CSS 3 & Vanilla JS replica of it.


> Solo project to earn the right to join a voyage by Chingu.

## Section Overview
There are 6 sections in this one page template.
- Topbar
- Hero
- About Us
- Services
- Contact Form
- Footer

### Topbar
This section works as a table of content for the site.
You click on a section and you will be redirected to the respective section.
To update the links name you just have to update the respective text in the html section.
```html
  <li class="navigation_list--item">
    <a href="#hero" class="navigation_link navigation_link_js">Homepage</a>
  </li>
```
To maximize on flexibility the `.navigation_link_js` class was added to be used exluclsively by JS so that if we would want to manipulate the main CSS class; it won't affect the functionality.


### Hero
This section welcomes the user to the site.
It's the first thing one will see when they land. It needs to be striking.
To replace it you need to change the background on the `.hero` class.


### About Us
This section allows you to talk more about yourself.
We have added different layouts, colours and buttons to show you available options you
can use when adding this section. Don't feel obligated to match the layout. Adapt it to
your needs.


### Services
Similar to the About Us section. This also comes in multiple layouts to show you
the bredth of options in this template.
Of course the topic of choice here should be about services and products.


### Contact Form
No useful website lacks a means of contacting the owner.
This section allows the visitors to reach out to you to talk more about an interest they have be it a service/product or the owners themselves.
There is also a section that allows you to be welcoming to using the contact form.
You can also use it to add your physical / postal address.


### Footer
Here there are two(2) sub-sections: 

#### Remarks
This section allows you to conclude to your audience.
It can be a quote. link to your social media etc. anything you feel can give your visitors as they reach the end of your website.


#### Copyrights
This section helps protect your content. Always use it. If you can dynamically add the current year using JS would be perfect. But to make it timeless. we left it without one so that you don't have to worry whether every year you need to update that section.


## Deployment Instructions
Nowadays there are multiple ways to host static websites without incurring any cost.
I personally used [Surge](https://surge.sh/).

All you need are 3 steps:

- Install `surge` using (node package manager - npm) in your terminal
`npm install --global surge` you don't need to install it globally but why not?
- Once it's installed you need to go to where your project is in your terminal
`cd ~/project/folder`
- Last but not least: start the deployment process.
Enter `surge` in the terminal and surge will take you through the deployment process
  - It asks you to login / register your account. 
  - Confirms the folder you want to deploy
  - Asks you to confirm the url you want. 
  > PRO Tip: enter the url with `https://` to protect it automatically.
  - You can also add custom domains. but here is where your free peny ends. Otherwise your stuck with the default `--custom-domain.surge.sh` format.

  You can check it out here
  [Conquerer HTML5 Template](https://conquerer-html5.surge.sh)


  Thanks,
  Ng'ethe


