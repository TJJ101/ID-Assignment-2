# Assignment 2
Interactive Development Assignment 2
---------
Url: https://tjj101.github.io/ID-Assignment-2/
--------------
Project Name: Calisthenics Store 2.0
----------------------------------------------------------------------------

    This project is similar to my previous one. This time however, with a functioning
Shopping Cart, checkout page etc. The website is for selling equipment and/or
training programs for people who are interested in Calisthenics.


Design Process:
-----------------------------------------------------------------------------

    The design process is even simpler than the last assignment since I pretty 
much resuse most of the assets. Although there was a few things I decided to 
change.

    First was the home page, I decided to remove all the contents that was on
it from the previous assignment. I wanted to put a Search Bar right under
the title and below it add a slideshow of all the products on the site. In
my opinion, this would look more visually appealing.

    Next was adding a register/login page. In the beginning, it was going
to be an additional page until I saw a popup version of it on w3School
(https://www.w3schools.com/howto/howto_css_login_form.asp). Thus, I added
a popup version of it. The functionality is uh...not implemented.

    Lastly was adding a bundles page. This was because I wanted a dropdown
menu on the Navbar but I didn't have any content for it so I created some
random bundles to fill it. The design for the pages is super simple as each
one has their own page and thus, plenty of space. 



Existing Features:
-----------------------------------------------------------------------------

➡ Navigation Bar: A simple Navigation Bar to allow users easy access to all
the pages in the website

➡ SideBar/Category Button(Only on Home Page): When on laptop/computer, there's
a sidebar for all the products categorized by their categories for overall viewing.
On smaller devices, it becomes a button which will open the sidebar. 

➡ Add to Cart Function: Able to add products into the Cart

➡ Shopping Cart Function: Able to view all the products currently in the cart as
well as being able to checkout or increase/decrease the quantity of any product
currently in the cart

➡ Checkout Page: Able to choose payment method, delivery method, and fill out
your particulars. 


➡

Features Left to Implement:
-----------------------------------------------------------------------------

➡ Live Search Bar: I wanted to implement a live search bar that allows u to
search any of the product on the page. This was however, harder than I expected
since I needed to use ajax etc, which I tried but couldn't get to work. However,
in the future when I can get it to work, this will be very handy for consumers.

➡ Functioning Register/Login: I wanted this to work as well, where after you
registered and logged in, it will replace the thing on the Navbar with ur name
and the dropdown menu when u hover over it is now "check account details" and
the likes. I tried to use localstorage to implement it but I couldn't get it
to work. In the future, when I can implement it, I'll make it so there is also
special deals for members compared to non-members like discounts and such.

➡

Testing:
------------------------------------------------------------------------------

➡ On occasion, the API might bug out. The way to identify when it
doesnt work is when you can't remove items from the cart, and the items in the cart
has wrong names and prices. 

It seems to act up after you have made a successful purchase (as in fully go through
the checkout page). A solution seems to be manually changing the cache key? (This 
is a question mark because I don't know exactly if this solves it). And waiting after,
while the API bugs out, you have to clear the cart as well which is just filling the
form with random information, checkout. Click the cart again and checkout again 
(cause the thing hasn't refresh yet) and then reload the page.

Also the checkout page on the cart doesnt work on any other page other than the Home page.


Acknowledgement:
--------------------------------------------------------------------------------

➡ Bootstrap: https://getbootstrap.com/
Utilized a decent ammount of bootstrap like Navbar, flexbox here and there.

➡ w3school: https://www.w3schools.com/
Helped me a lot in my assignment with answering questions I have etc. Also have
utilized some part of the code they have shown. Will reference it below.

➡ stackoverflow: https://stackoverflow.com/
Existing forums there with similar questions I have had answers which helped me
greatly. 1 in particular is the code for the matching password.

➡ APICART: 
This is the API I have used for my website so thus, I need to acknowledge them 
as well. They have a very friendly user interface and easy to use functions.

➡

Content Credit:
---------------------------------------------------------------------------------

➡ Some of the technical info on the Freestanding Pullup Bar Section of the Equipment Page was taken from
Decathlon's store page of a similar Product: https://www.decathlon.sg/p/8503464-114120-training-station-900-bodyweight-rack.html?gclid=CjwKCAiA5IL-BRAzEiwA0lcWYqqap0mHHt78NOCkbfgXhPtDv6iFAf2BTMbGR5DX30p52BlJsMD2jRoCtkUQAvD_BwE

➡ Some of the text on the Dip Bars Section of the Equipment Page was taken from Decathlon's Store page 
of a similar Product: https://www.decathlon.sg/p/8503464-114120-training-station-900-bodyweight-rack.html?gclid=CjwKCAiA5IL-BRAzEiwA0lcWYqqap0mHHt78NOCkbfgXhPtDv6iFAf2BTMbGR5DX30p52BlJsMD2jRoCtkUQAvD_BwE


References:
---------------------------------------------------------------------------------

➡ Popup Login/Register Form: https://www.w3schools.com/howto/howto_css_login_form.asp

➡ Matching Password Function: https://stackoverflow.com/questions/21727317/how-to-check-confirm-password-field-in-form-without-reloading-page

➡ Main Logo: https://www.pngwing.com/en/free-png-yflbh

➡ Pullup Bar Image (Used on the Basics Mastery Section on Training Programs Page):
https://www.vectorstock.com/royalty-free-vector/man-doing-pull-ups-on-the-horizontal-bar-icon-vector-8521707

➡ Background Image: https://www.freepik.com/free-vector/low-poly-abstract-design-rose-gold_9020840.htm#position=21

➡ Freestanding Pullup Bar Image: https://outsons.com/best-free-standing-pull-up-bars-on-amazon/

➡ Gymnastic Rings Image: http://www.movementfirst.sg/suspension-training/14-premium-wood-gym-rings-commercial.html

➡ Dip Bars Image: https://www.decathlon.sg/p/8379822-108729-100-training-station-dip-bars.html?gclid=CjwKCAiAnvj9BRA4EiwAuUMDfyNiBUKYeoMQUHvXOZyusihXR5pwxMSiqW6VWMwh7N-qunKkW6U2ExoCTqwQAvD_BwE

➡ 

