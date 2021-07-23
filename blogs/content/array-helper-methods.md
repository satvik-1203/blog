> Array methods can be the most confusing thing one can think of in the language of JS. They are so useful that almost every framework is based on array methods, eg: REACT.JS. 

<h2> Why are they so useful? </h2>

* The main reason why they are used is the clean syntax they can provide while using it in a complex code. 

* We will be covering forEach, map, filter, find, findIndex, reduce.
 ```I'll be giving an example with arrow function, plain function and also with for loop.```

<h3> forEach </h3>

*This is probably the first method you can think of when you hear the word array methods.* 

* Suppose you want to print each element in a array, generally you would want to make a for loop from zero to length-1 and print right? But in case of forEach thats not how it works. Let's see some examples.


![Screen Shot 2021-06-07 at 5.33.05 AM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/arh8s7wnlw8lb6478cad.png)

<p>You might say this doesn't look so shabby but well imagine writing the same statement millions of times for iterating? 

It gets real boring lmaoo.
 
Let's see an example using forEach.
</p>

![Screen Shot 2021-06-07 at 5.40.32 AM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7xzrbv2avvwj9ukbn25k.png)

Thats an example using plain function, let's see how it looks after changing it into arrow function.

![Screen Shot 2021-06-07 at 5.47.31 AM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rsv99yg5uj1d9qvzzk32.png)
 
Surprised? How small you can make your code? 
```Note: if you statement is more than one line you would want to use {} ```
 

<h3> map </h3>

<p> If you have tried understanding what maps are previously you would question yourself what is the difference between a map and forEach method. But by base both map and forEach method are similar, they both iterate through every element in the array but the biggest difference is, maps return a brand new array while forEach doesn't. Lets look at some examples. </p>

![Screen Shot 2021-06-07 at 5.58.52 AM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t2y56o9u5uxmw6w5kxqh.png)

<h4> Why is it giving us undefined?  </h4>
 <p> What is the definition of undefined? not defined? since the variable isn't initialized to something it's giving us undefined. By this we can conclude that forEach doesn't return anything to us </p>

<h4> Let's look at maps </h4>


![Screen Shot 2021-06-07 at 6.08.23 AM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xz1xk52nv1ycjfoi0ah3.png)
 

<p> The same code I changed it to maps, look what the output is, we got an array since map returns an array. </p>

### AMAZING FACTS

<p> When accessing the forEach and map method, there is actually a second parameter which is index, it not quite used but it's good to know</p>

![Screen Shot 2021-06-08 at 11.11.53 AM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jehho0fiepkn4fsj6b8l.png)
 

<p> The screenshot can be confusing since I had to show both arrow function and also normal function, but observe how I was able to access the index value and print it. You can name it anything not only index </p>

<p> I think this should conclude the description about forEach and map. Let me remind you again, though forEach and map are similar, use the right one depending on the situation. forEach doesn't return a brand new array while map returns an array </p>

<h3> Filter </h3>

<p> Taking any framework in JS, you might see filter occurring 
as much as map or forEach. 
 </p>

* Suppose you have an array and you only want a fresh array that has only the values that are 0 or over 0, how do we do that with the old school for loop? lets see.

![Screen Shot 2021-06-08 at 11.29.49 AM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/o9j11abbbb8b2qajb7i1.png)
 
* Wanna be amazed by the filter method now?

![Screen Shot 2021-06-08 at 11.34.05 AM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/r35bpofeszi0ydh7y7cv.png)

* Using arrow function or no is completely your choice, but I would say using arrow function would be better thanks to the clear syntax. 

* You can also do this filter methods on objects

Suppose you have an array of objects (books) and you only want the books that cost less than 10$, lets see how we can implement that.

![Screen Shot 2021-06-08 at 11.43.51 AM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/axupdn1nlodthwgu00j8.png)
 
* Well seriously its that simple.

<h3> find & findIndex </h3>

<p> Find and FindIndex can be very similar, also similar to how you would normally use them with primitive data types. 

Lets find out how it works with objects.

 </p> 
 
<p> Suppose you have a array of books(objects), You want to find a book with particular id, how do we do that? You can do them iterating through the entire array and compare each object's id? Yepp thats about it, so lets see how we do that using array methods and for loop</p>

![Screen Shot 2021-06-12 at 9.37.44 AM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bgcb1hmyltiyrdbcwsol.png)
 
<p> So that how we do it using for loop, we iterate through the entire loop, when  we find object we return it back. Same goes for findIndex as well
 </p>

<p> Let's see how we do it using array methods </p>

![Screen Shot 2021-06-12 at 9.41.29 AM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/frn87oyazsouedsxbp9s.png)
 
> Not you can't do something like **Array.find(object)**
since objects are compared with hash code and not how the structure and values look like.

With this I think we can wrap up the topic:) . 
I hope you got a better understanding about this topic.

Let me know what other article you want me to write in the comments below. Peace.