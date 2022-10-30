Fetching resources over the network is both slow and expensive: the download may require multiple roundtrips between the client and server,
 which delays processing and may block rendering of page content, and also incurs data costs for the visitor. All server responses should specify
  a caching policy to help the client determine if and when it can reuse a previously fetched response.


  Each resource should specify an explicit caching policy that answers the following questions: whether the resource can be cached and by whom, for 
  how long, and if applicable, 
  how it can be efficiently revalidated when the caching policy expires. When the server returns a response it must provide the Cache-Control and
   ETag headers:

Cache-Control defines how, and for how long the individual response can be cached by the browser and other intermediate caches. To learn more, see 
caching with Cache-Control.
ETag provides a revalidation token that is automatically sent by the browser to check if the resource has changed since the last time it was 
requested. To learn more, see validating cached responses with ETags.
