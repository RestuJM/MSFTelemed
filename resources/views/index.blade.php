<!DOCTYPE html>
<html ng-app="sample"  lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Starter - Laravel & AngularJS</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <title>Rainbow SDK for Web wowwowowwowo</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" type="image/png" href="./res/appLogo.png"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600&subset=latin,cyrillic-ext,cyrillic">
       <!--  <link rel="stylesheet" href="./resources/angular/js/components/connection/connectionCmp.css"> -->
       
        <script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.9/es5-shim.min.js"></script>
        <script src="//cdnjs.cloudflare.com/ajax/libs/es6-promise/4.0.5/es6-promise.min.js"></script>
       <!--  <script src="./resources/angular/js/components/connection/connectionCmp.js"></script> -->
</head>
    <body>
      <!-- Demo specific part -->
  
<div class="flex-center position-ref full-height" ng-controller="sampleController">   

    <div class="content">
        <div class="app-contacts">
            <rbx-contacts name="rbxContacts"></rbx-contacts>
        </div>
        
        <div class="app-user">
            <rbx-connection name="rbxConnection"></rbx-connection>
            <rbx-user name="rbxUser"></rbx-user>
            <rbx-presence name="rbxPresence"></rbx-presence>
            <rbx-contact name="rbxContactCall"></rbx-contact>
        </div>

        <div class="app-container">
            <rbx-conversations name="rbxConversations"></rbx-conversations>
        </div>

       

    </div>
</div>

<!-- Angular Init Here -->

<script src="//api.openrainbow.com/sdk/web/libs/loader-sdk.min.js" data-main="{{ asset('config.json') }}"></script>

<!-- App JS Files - All Controllers -->
<script src="{{ asset('resources/angular/js/application.js') }}"></script>
<script src="{{ asset('resources/angular/js/MainController.js') }}"></script>

</body>
</html>
