we will make react ai chatbot with the help of chatgpt and gemini.
we will build a react ai chatbot integrate chatgpt and gemini apis. 

you should have basic html css js react concepts. variables, data types, operators, condition, function, 
loops, events, string, array methods of map filter and foreach. es6 concepts spread operator, module, destruction. 

we need google chrome vs code and node js for this project. we will use vite to create react project. 
vite is frontend building tool that helps in generating web application. goto vite website and get started and scaffolding first react project. 
in terminal of vs code, type command npm create vite@latest. then click yes, give project name, package name, package.json and select 
framework react, and then javascript language. 

next we need to open in that folder in terminal and then install dependency. use npm install and then npm run dev. 
it will open project on local host 5173. 

next delete the asset folder in src, and delete the img of vite in public folder. delete app.css and 
clean code in app.jsx file. in index.css, remove extra code of a, h1, button and other tags. 

we can use google gemini api key or we can use openai chatgpt api key. 

now we will have access to google ai and configure it but first get its api key. open 
aistudio.google.com/app/apikey
and click on create apikey. choose gemini api and create and we can copy our api key. 

create .env.local in your project vs code and write api key there as VITE_GOOGLE_AI_API_KEY= ******* 

.env is used for environment variables. we can store some secure variables here to access different services. 
you can learn about it on vite.dev/guide/env-and-mode#env-files. 

create another file .env.example which will give instruction that what variables developer need to use if 
anyone else want to work with this project. it will have same variables but will not have actual api key but just
some dynamic text. 

now we will learn how to connect google assistant with our chatbot. check documentation here. 
ai.google.dev/gemini-api/docs/text-generation?lang=node#chat

first we install google ai library by npm package. then we import google generative ai and create instance of 
this generative ai and provide api key. 
next we create instance of model and provide model name as gemini. then we create chat. history will be empty first 
and then will store results. and then to get it we will call chat.sendMessage(); 
we will await keyword because api keys are asynchronous. 

install the library  by npm i @google/generative-ai. once installed, check in package.json file and then 
import in app.jsx file. 

now we will integrate open ai api key. goto platform.openai.com/settings/organization/api-keys
and login. and create new secret key. copy it and paste it in your env file. 

platform.openai.com/docs/guides/text-generation#quickstart. 

next we will connect open ai api key and chat with its bot. first install open ai. npm i openai.

now we want to add loader to our website. goto https://css-loaders.com/dots/
and then select the loader that you want and integrate its css. you can do custom styling with loader. 

next is how to add markdown support to our chatbot. chatbot is answering without proper formatting like bullet 
lists and symbols. we need to install markdown in our project and then import its components. 
npm i react-markdown
then wrap {content} inside it and hence we can get proper response. 

next we will learn how to make textarea auto resizeable. when user type text our area is very small so we use 
text-area autoresize library so when user type he can see full text. 
first install it npm i react-textarea-autosize 
import it and just use with tag. set min and maxrows in textarea. 

next is to disable chat control during response is laoding. user should not be able to type text when loading. 

next is to get auto focus on our text when we response is complete. 

next we implement the auto scrolling to bottom. 

next is to improve auto scrolling behavior. like when we ask one question and then second it scrolls to our 
second question. it should scroll to last question. 
we will group our questions and message together and consider that we have an array. 

Next we will add dark mode support. we will use light-dark css color function that will check automatically 
that whether it is in white mode or dark mode. we just need to give two colors as props. first for light, and 
second for dark mode.
another feature to use is prefer color scheme. it is used to detect if user has light or dark mode. 

next we will eneble chat streaming in chatbot. how it generate response for us. like when we say it generate 
small and if we ask it generate large text with different paragraphs. read documentation how to enable chat 
streaming in gemini. below is link. 
ai.google.dev/gemini-api/docs/text-generation?lang=node#chat-streaming
developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions

we will need to use sendMessageStream function in our googleai.js file. we will need loop for result.stream. 
also we will wait for asynchronous function. we will save every result into chunk and use chunk.text() to get 
content of the message. 
we wil also use js generator function. it is used with special symbol and generator are together used with 
yield statement. allow us to pass and resume execution of function till we wait on some response. it allows 
to work with asynchronous code and handle data sequence more efficiently.    

next is to connect openai for chat streaming. read documentation 
platform.openai.com/docs/api-reference/streaming
