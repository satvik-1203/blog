> JavaScript is a single threaded language so how does it handle processes that require multi threads?
 **LETS FIND OUT**

<h2> Why do people say JS isn't a stand alone language? </h2>

The first thing that comes to our mind is JS needs an environment to run (node or browser), so we call it dependent language.

So basically JS is a single threaded language so how can it perform api or any processes that require another thread? 

**IT CAN'T** 

But when its run on browser or node environment, it takes help of something called event loop. 

<h3> What is event loop?  </h3>

![Screen Shot 2021-06-25 at 9.17.00 AM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pvttj4j1k2h79yo28d9n.png)
 
Before we get into the understanding of event loop. It's ideal to understand how call stack works. *(will make another blog on call stack or please refer to another blog on call stack)*. 

Any process that is async goes into the call stack. It is directly thrown into the event loop and new call stack is formed to call the next process. 

**What happens in the event loop?**

The event loop is something that is at core done by c++ and c to do the non-blocking I/O operations that couldn't be done with vanilla JS. 

It would be easier to understand doing it with an example. 

Let's take the most basic function of asynchronous call which is setTimeout().

Step 1: 
       setTimeout() first goes into the call stack.

![Screen Shot 2021-06-25 at 9.40.00 AM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/irgl80sng1ko22smsd6j.png)
 

Step 2: Since setTimeout is an async call it gets put in the event loop immediately. 
![Screen Shot 2021-06-25 at 9.41.47 AM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/y8b0qj587jw7wl8yo5b9.png)

Step 3: Now the call stack looks for the next process while the setTimeout() process is happening in the event loop. This is what they call async programming. Doing multiple tasks at the same time. 

Once the process in the event loop is done. It goes to the event queue so that the call stack can pick it up once there are no more processes left for the call stack to read. 


![Screen Shot 2021-06-25 at 10.16.25 AM](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g9xtgw40sfi32osiotpa.png)

Once no more processes are left for the call stack, the event queue then pushes the call backs to the call stack so that the script can finally end. 


```
hello 
```