var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        document.getElementById("gap").setAttribute("class", "hide");
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
        app.check();
    },
    check: function() {
        console.log("connection check");
        console.log(navigator.network.connection.type);
        var failElem = document.getElementById('fail');
        var successElem = document.getElementById('win');

        console.log(navigator.network.connection.type);
        
        var networkState = navigator.network.connection.type;
        if (networkState == Connection.NONE) {
            failElem.setAttribute("class", "status");
            successElem.setAttribute("class", "hide");
        }
        else {
        	failElem.setAttribute("class", "hide");
            successElem.setAttribute("class", "status");
            console.log('redirecting...');
            //window.location.href = "http://m.tccd.edu/";
        }
    }
};
