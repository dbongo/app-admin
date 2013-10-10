<div class="well main">
    <div class="navbar">
        <div class="navbar-inner condensed">
            <div class="brand">QuickStart</div>
        </div>
    </div>
    <div ng-show="step == 1">Give your app a name :&nbsp;
        <input type="text" class="input-large" data-ng-model="app.api_name">

            <div class="alert alert-info">This is your API KEY. Pass as header : X-DreamFactory-Application-Name, or as
            app_name in your querystring on each request.
            </div>
            <br/>
        What kind of app are you building?<br>
            <input type="radio" value=0 data-ng-model="app.native">&nbsp;HTML 5 / Javascript<br/>
                <input type="radio" value=1 data-ng-model="app.native">&nbsp;Native
                    <span id="native-list">
                        <span class="icon icon-apple"></span>
                        <span class="icon icon-android"></span>
                        <span class="icon icon-windows"></span>
                    </span>

                    <br/><br/>

                    <button class="btn btn-success" data-ng-click="setStep(2)">Next</button>
                </div>
                <div ng-show="step == 2">Step 2
                Where do you intend on developing?
                    <br/>
                    <input type="radio" data-ng-model="app.storage_service_id"> In my local environment<br/>
                        <input type="radio" value=1 data-ng-model="app.storage_service_id"> Here on the DSP
                            <div class="alert alert-info">If you plan to work locally, make sure your CORS settings are set accordingly.  * for the file system, or your server name.
                            </div>
                            <div class="btn-group">
                                <button class="btn" data-ng-click="setStep(1)">Previous</button>
                                <button class="btn btn-success" data-ng-click="create();setStep(3)">Next</button>
                            </div>
                        </div>
                        <div ng-show="step == 3">Step 3
                            <div ng-show ="!app.native">Download the javascript-sdk<br/>
                                <p>
                                If you'd like to use our javascript-sdk, which we've just created for this DSP and app, click the download button below.
                                    <br/>

                                </p></div>
                            <br/>
                            <div class="btn-group">
                                <button class="btn" data-ng-click="setStep(2)">Previous</button><button data-ng-click="downloadSDK();setStep(4)" class="btn btn-primary">Download SDK</button><button class="btn btn-success" data-ng-click="setStep(4)">Skip To Development Info</button>
                            </div>
                        </div>
                        <div ng-show="step == 4">Step 4
                            <br/>New content regarding dev and deployment
                            <div class="btn-group">
                                <button class="btn" data-ng-click="setStep(3)" data-ng-show="app.native != 1">Previous</button>
                            </div>
                        </div>
                        <iframe style="display:none" id="sdk-download" src=""></iframe>
                    </div>

