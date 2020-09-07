import * as React from "react";
import {Component} from "react";
import {useState} from "react";
import {dynamicPost} from "../../store/dynamicPost";
import AppLayout from "../../components/AppLayout";
import {toJS} from "mobx";
import {inject, observer} from "mobx-react";
// import {useRouter} from 'next/router'

const Post = ({data}) => {
  console.log("in f post, props;", data);
  return (
    <AppLayout>
      <div> article</div>
    </AppLayout>
  );
};

export async function getServerSideProps(context) {
  console.log("in getserverside, context,; ", context.query.id);   // 3 값이 정상적으로 나옴
  await dynamicPost.eReactPostR(context.query.id);  // 요청  성공함
  console.log('in getserverside, context, eRPrender ;' , dynamicPost.eRPrender);
  let postData = dynamicPost.eRPrender;
  console.log('in getserverside, context, postData;', postData);
  return {
    props: {data: postData}
  };
}

export default Post;


//  1
// Post.getInitialProps = async ({res, query}) => {
//   console.log("in Post, getIP, res  ;", res);
//   console.log("in Post, getIP, query  ;", query);  // { id : 3 }
//   await dynamicPost.eReactPostR(query.id);
//   let postData = await toJS(dynamicPost.eRPrender)
//   console.log('in getinitialProps data;' , postData);
//   return {postData};
// };
// console.log("out f post, postData ", postData);
//
// // 2
// export async function getServerSideProps(context) {
//   console.log(context)
//   await dynamicPost.eReactPostR(context.params.id);
//   let post = await toJS(dynamicPost.eRPrender)
//   console.log('in 겟서버사이드, post', post);
//   return {props: {post}}
// }
//
// // 3


// _readableState: ReadableState {
//   objectMode: false,
//     highWaterMark: 16384,
//     buffer: BufferList { head: null, tail: null, length: 0 },
//   length: 0,
//     pipes: [],
//     flowing: null,
//     ended: true,
//     endEmitted: false,
//     reading: false,
//     sync: true,
//     needReadable: false,
//     emittedReadable: false,
//     readableListening: false,
//     resumeScheduled: false,
//     errorEmitted: false,
//     emitClose: true,
//     autoDestroy: false,
//     destroyed: false,
//     errored: false,
//     closed: false,
//     closeEmitted: false,
//     defaultEncoding: 'utf8',
//     awaitDrainWriters: null,
//     multiAwaitDrain: false,
//     readingMore: true,
//     decoder: null,
//     encoding: null,
//     [Symbol(kPaused)]: null
// },
// _events: [Object: null prototype] {},
// _eventsCount: 0,
//   _maxListeners: undefined,
//   socket: Socket {
//   connecting: false,
//     _hadError: false,
//     _parent: null,
//     _host: null,
//     _readableState: [ReadableState],
//     _events: [Object: null prototype],
//   _eventsCount: 8,
//     _maxListeners: undefined,
//     _writableState: [WritableState],
//     allowHalfOpen: true,
//     _sockname: null,
//     _pendingData: null,
//     _pendingEncoding: '',
//     server: [Server],
//     _server: [Server],
//     parser: [HTTPParser],
//     on: [Function: socketListenerWrap],
//   addListener: [Function: socketListenerWrap],
//   prependListener: [Function: socketListenerWrap],
//   _paused: false,
//     _httpMessage: [ServerResponse],
//     timeout: 0,
//     [Symbol(async_id_symbol)]: 737170,
//     [Symbol(kHandle)]: [TCP],
//     [Symbol(kSetNoDelay)]: false,
//     [Symbol(lastWriteQueueSize)]: 0,
//     [Symbol(timeout)]: Timeout {
//     _idleTimeout: -1,
//       _idlePrev: null,
//       _idleNext: null,
//       _idleStart: 88862,
//       _onTimeout: null,
//       _timerArgs: undefined,
//       _repeat: null,
//       _destroyed: true,
//       [Symbol(refed)]: false,
//       [Symbol(asyncId)]: 782423,
//       [Symbol(triggerId)]: 782420
//   },
//   [Symbol(kBuffer)]: null,
//     [Symbol(kBufferCb)]: null,
//     [Symbol(kBufferGen)]: null,
//     [Symbol(kCapture)]: false,
//     [Symbol(kBytesRead)]: 0,
//     [Symbol(kBytesWritten)]: 0
// },
// httpVersionMajor: 1,
//   httpVersionMinor: 1,
//   httpVersion: '1.1',
//   complete: true,
//   headers: {
//   host: 'localhost:3000',
//     connection: 'keep-alive',
//     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
//     accept: '*/*',
//     'sec-fetch-site': 'same-origin',
//     'sec-fetch-mode': 'cors',
//     'sec-fetch-dest': 'empty',
//     referer: 'http://localhost:3000/errors/react',
//     'accept-encoding': 'gzip, deflate, br',
//     'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
//     cookie: '_xsrf=2|aa77c72e|c4e0a9315ba41943eec6414d6ea95c1a|1597808381; username-localhost-8889="2|1:0|10:1598284970|23:username-localhost-8889|44:ODhmM2VhMzVmNWRhNDUyNjhkY2RjNjVhYzBhNWY1OGQ=|a43043765811
//   bc3a28e24b547e72c03d74967c702a24fa45d8b121568149f9ad"; username-localhost-8888="2|1:0|10:1598452216|23:username-localhost-8888|44:MTRlZDA4MGMzZTlkNDI3OWI1MjBmYWRmNmYzZmY5NWQ=|d6cb1ee8be00af9feab49fa8b2ef47ae1d
//   1fa92187a3b81283b70751362e925a"',
//   'if-none-match': '"27-E4h9fPa48setpiLolsOgld0XF4Q"'
// },
// rawHeaders: [
//   'Host',
//   'localhost:3000',
//   'Connection',
//   'keep-alive',
//   'User-Agent',
//   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36',
//   'Accept',
//   '*/*',
//   'Sec-Fetch-Site',
//   'same-origin',
//   'Sec-Fetch-Mode',
//   'cors',
//   'Sec-Fetch-Dest',
//   'empty',
//   'Referer',
//   'http://localhost:3000/errors/react',
//   'Accept-Encoding',
//   'gzip, deflate, br',
//   'Accept-Language',
//   'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
//   'Cookie',
//   '_xsrf=2|aa77c72e|c4e0a9315ba41943eec6414d6ea95c1a|1597808381; username-localhost-8889="2|1:0|10:1598284970|23:username-localhost-8889|44:ODhmM2VhMzVmNWRhNDUyNjhkY2RjNjVhYzBhNWY1OGQ=|a43043765811bc3a28e2
//   4b547e72c03d74967c702a24fa45d8b121568149f9ad"; username-localhost-8888="2|1:0|10:1598452216|23:username-localhost-8888|44:MTRlZDA4MGMzZTlkNDI3OWI1MjBmYWRmNmYzZmY5NWQ=|d6cb1ee8be00af9feab49fa8b2ef47ae1d1fa92187
// a3b81283b70751362e925a"',
// 'If-None-Match',
//   '"27-E4h9fPa48setpiLolsOgld0XF4Q"'
// ],
// trailers: {},
// rawTrailers: [],
//   aborted: false,
//   upgrade: false,
//   url: '/_next/data/development/posts/3.json?id=3',
//   method: 'GET',
//   statusCode: null,
//   statusMessage: null,
//   client: Socket {
//   connecting: false,
//     _hadError: false,
//     _parent: null,
//     _host: null,
//     _readableState: [ReadableState],
//     _events: [Object: null prototype],
//   _eventsCount: 8,
//     _maxListeners: undefined,
//     _writableState: [WritableState],
//     allowHalfOpen: true,
//     _sockname: null,
//     _pendingData: null,
//     _pendingEncoding: '',
//     server: [Server],
//     _server: [Server],
//     parser: [HTTPParser],
//     on: [Function: socketListenerWrap],
//   addListener: [Function: socketListenerWrap],
//   prependListener: [Function: socketListenerWrap],
//   _paused: false,
//     _httpMessage: [ServerResponse],
//     timeout: 0,
//     [Symbol(async_id_symbol)]: 737170,
//     [Symbol(kHandle)]: [TCP],
//     [Symbol(kSetNoDelay)]: false,
//     [Symbol(lastWriteQueueSize)]: 0,
//     [Symbol(timeout)]: Timeout {
//     _idleTimeout: -1,
//       _idlePrev: null,
//       _idleNext: null,
//       _idleStart: 88862,
//       _onTimeout: null,
//       _timerArgs: undefined,
//       _repeat: null,
//       _destroyed: true,
//       [Symbol(refed)]: false,
//       [Symbol(asyncId)]: 782423,
//       [Symbol(triggerId)]: 782420
//   },
//   [Symbol(kBuffer)]: null,
//     [Symbol(kBufferCb)]: null,
//     [Symbol(kBufferGen)]: null,
//     [Symbol(kCapture)]: false,
//     [Symbol(kBytesRead)]: 0,
//     [Symbol(kBytesWritten)]: 0
// },
// _consuming: false,
//   _dumped: false,
//   [Symbol(kCapture)]: false
// },
// res: <ref *1> ServerResponse {
//   _events: [Object: null prototype] { finish: [Function: bound resOnFinish] },
//   _eventsCount: 1,
//   _maxListeners: undefined,
//   outputData: [],
//   outputSize: 0,
//   writable: true,
//   destroyed: false,
//   _last: false,
//   chunkedEncoding: false,
//   shouldKeepAlive: true,
//   useChunkedEncodingByDefault: true,
//   sendDate: true,
//   _removedConnection: false,
//   _removedContLen: false,
//   _removedTE: false,
//   _contentLength: null,
//   _hasBody: true,
//   _trailer: '',
//   finished: false,
//   _headerSent: false,
//   socket: Socket {
//   connecting: false,
//   _hadError: false,
//   _parent: null,
//   _host: null,
//   _readableState: [ReadableState],
//   _events: [Object: null prototype],
//   _eventsCount: 8,
//   _maxListeners: undefined,
//   _writableState: [WritableState],
//   allowHalfOpen: true,
//   _sockname: null,
//   _pendingData: null,
//   _pendingEncoding: '',
//   server: [Server],
//   _server: [Server],
//   parser: [HTTPParser],
//   on: [Function: socketListenerWrap],
//   addListener: [Function: socketListenerWrap],
//   prependListener: [Function: socketListenerWrap],
//   _paused: false,
//   _httpMessage: [Circular *1],
//   timeout: 0,
//   [Symbol(async_id_symbol)]: 737170,
//   [Symbol(kHandle)]: [TCP],
//   [Symbol(kSetNoDelay)]: false,
//   [Symbol(lastWriteQueueSize)]: 0,
//   [Symbol(timeout)]: Timeout {
//   _idleTimeout: -1,
//   _idlePrev: null,
//   _idleNext: null,
//   _idleStart: 88862,
//   _onTimeout: null,
//   _timerArgs: undefined,
//   _repeat: null,
//   _destroyed: true,
//   [Symbol(refed)]: false,
//   [Symbol(asyncId)]: 782423,
//   [Symbol(triggerId)]: 782420
// },
//   [Symbol(kBuffer)]: null,
//   [Symbol(kBufferCb)]: null,
//   [Symbol(kBufferGen)]: null,
//   [Symbol(kCapture)]: false,
//   [Symbol(kBytesRead)]: 0,
//   [Symbol(kBytesWritten)]: 0
// },
//   _header: null,
//   _onPendingData: [Function: bound updateOutgoingData],
//   _sent100: false,
//   _expect_continue: false,
//   statusCode: 200,
//   flush: [Function: flush],
//   write: [Function: write],
//   end: [Function: end],
//   on: [Function: on],
//   writeHead: [Function: writeHead],
//   [Symbol(kCapture)]: false,
//   [Symbol(kNeedDrain)]: false,
//   [Symbol(corked)]: 0,
//   [Symbol(kOutHeaders)]: null
// },
// query: { id: '3' },
// params: { id: '3' }
// }
