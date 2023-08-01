// import { MobileNavBar } from "./nav-bar/mobile-nav-bar.component";
// import { NavBar } from "./components/nav-bar.component";

import { NavBar } from "./nav-bar";

function App() {
  return (
    <>
      <NavBar />
      <p>
        n this blog post we’re going to cover how to use WebSockets to create
        real-time web applications. Before we dive into learning about the
        WebSocket protocol and API I first want to spend a little time going
        through some of problems that face real-time web applications and how
        the WebSocket spec aims to solve them. A Brief History of Real-Time Web
        Applications The web was built around the idea that a client’s job is to
        request data from a server, and a server’s job is to fulfill those
        requests. This paradigm went unchallenged for a number of years but with
        the introduction of AJAX around 2005 many people started to explore the
        possibilities of making connections between a client and server
        bidirectional. Web applications had grown up a lot and were now
        consuming more data than ever before. The biggest thing holding them
        back was the traditional HTTP model of client initiated transactions. To
        overcome this a number of different strategies were devised to allow
        servers to push data to the client. One of the most popular of these
        strategies was long-polling. This involves keeping an HTTP connection
        open until the server has some data to push down to the client. The
        problem with all of these solutions is that they carry the overhead of
        HTTP. Every time you make an HTTP request a bunch of headers and cookie
        data are transferred to the server. This can add up to a reasonably
        large amount of data that needs to be transferred, which in turn
        increases latency. If you’re building something like a browser-based
        game, reducing latency is crucial to keeping things running smoothly.
        The worst part of this is that a lot of these headers and cookies aren’t
        actually needed to fulfil the client’s request. What we really need is a
        way of creating a persistent, low latency connection that can support
        transactions initiated by either the client or server. This is exactly
        what WebSockets provide and in this post you are going to learn all
        about how to use them in your own applications. How to Use WebSockets
        WebSockets are used to provide a connection between a client and a
        server so that both parties can send data at any time. The client uses a
        process known as the WebSocket handshake, which helps establish a
        connection between the server and the client. This handshake process
        starts when the client sends a regular HTTP request to the server. An
        Upgrade header is included in this request that informs the server that
        the client wishes to establish a WebSocket connection. Here is a
        simplified example of the initial request headers. GET
        ws://websocket.example.com/ HTTP/1.1 Origin: http://example.com
        Connection: Upgrade Host: websocket.example.com Upgrade: websocket Note:
        WebSocket URLs use the ws scheme. There is also wss for secure WebSocket
        connections which is the equivalent of HTTPS.
      </p>
    </>
  );
}

export default App;
